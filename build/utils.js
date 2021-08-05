const fs = require('fs')
const Markdown = require('markdown-it')
const Prettier = require('prettier')
const { resolve } = require('path')

const PerttierConfig = {
  semi: false,
  parser: 'babel',
  singleQuote: true,
  embeddedLanguageFormatting: 'off'
}

const MD = new Markdown({
  linkify: true,
  html: true,
  typographer: true
})
.use(require('markdown-it-highlightjs'), {
  inline: true,
  register: {
    cypher: require('highlightjs-cypher')
  }
})


exports.resolveApp = (path) => resolve(__dirname, '..', path)

exports.writeFile = (path, data) => {
  try {
    if (fs.statSync(path).isFile()) fs.rmSync(path)
  } catch (error) {

  }

  fs.writeFileSync(path, data)
}

exports.removeDir = async (path) => {
  try {
    const dir = fs.statSync(path)
    if (dir.isDirectory()) fs.rmdirSync(path, { recursive: true })

  } catch (error) {
    console.error('❌ 不存在', error)
  }
}

exports.makeDir = async (path) => {
  return new Promise((res, rej) => {

    fs.mkdir(path, (err) => {
      if (err) rej(err)
      res()
    })
  })
}

exports.getMarkDownTemplate = async (paths = [], dirPath) => {
  // 取出props索引
  const propsIndex = paths.findIndex((item) => /props\.md/.test(item))
  const propsPath = paths[propsIndex]
  paths.splice(propsIndex, 1)
  const props = fs.readFileSync(propsPath).toString().split('<demo>')

  // 切割头部和尾部
  const header = MD.render(props[0])
  const floor = MD.render(props[1])
  // 中奖内容
  const content = paths.map((path) => {
    const last = path.lastIndexOf('/')
    const fileName = path.slice(last + 1).replace('.md', '').replace(/\d\./, '').toUpperCase()

    // 返回内容
    const data = { header: '', body: '', key: fileName }

    const fileContent = fs.readFileSync(path).toString()
    // 获取演示代码部分
    const startIndex = fileContent.indexOf('```tsx')
    const lastIndex = fileContent.lastIndexOf('```')
    const code = fileContent.slice(startIndex + 6, lastIndex)

    // 生成对应code文件
    data.header = `import ${fileName} from './demo/${fileName}'`

    const compDis = dirPath + '/demo'
    try {
      if (!fs.statSync(compDis).isDirectory()) this.makeDir(compDis)
    } catch (error) {
      this.makeDir(compDis)
    }

    this.writeFile(compDis + `/${fileName}.tsx`, Prettier.format(code, PerttierConfig))

    // 修改代码存放方式
    const markHeader = MD.render(fileContent.slice(0, startIndex))
    const markContentCode = MD.render(fileContent.slice(startIndex, lastIndex + 3))
    const markFloor = MD.render(fileContent.slice(lastIndex + 3))

    data.body = `
      <div className="demo-box">
        ${markHeader.replace(/class=/ig, 'className=')}
        <div className="demo">
          <${fileName} />
          <Divider orientation="left">描述</Divider>
          ${markFloor.replace(/class=/ig, 'className=')}
          <div className="action-cell">
            <Tooltip title="复制代码">
              <CopyToClipboard text={\`${code}\`}>
                <Button shape="circle" icon={<CopyOutlined />} size="small" />
              </CopyToClipboard>
            </Tooltip>
            <Tooltip title="查看代码">
              <Button shape="circle" icon={<CodeSandboxOutlined />} size="small" onClick={() => _set${data.key}(!_${data.key})} />
            </Tooltip>
          </div>
          {_${data.key} && (
            <div className="code-box" dangerouslySetInnerHTML={{ __html: \`${markContentCode}\` }} />
          )}
        </div>
      </div>
      <br />
    `

    return data
  })


  const result = `/* eslint-disabled */\n//
    import { useState } from 'react'
    import { Divider, Tooltip, Button } from 'antd'
    import { CodeSandboxOutlined, CopyOutlined } from '@ant-design/icons'
    import { CopyToClipboard } from 'react-copy-to-clipboard'

    ${content.map((item) => item.header).join('\n')}

    const Pgae: React.FC = () => {
      ${content.map((item) => `const [_${item.key}, _set${item.key}] = useState(false)`).join('\n')}

      return (
        <>
          ${header.replace(/class=/ig, 'className=')}
          <div className="solt-demos">
            ${content.map((item) => item.body).join('')}
          </div>
          ${floor.replace(/class=/ig, 'className=')}
        </>
      )
    }

    export default Pgae
  `
  this.writeFile(
    dirPath + '/index.tsx',
    Prettier.format(result, PerttierConfig)
  )

  this.writeFile(dirPath + '/config.js', Prettier.format(
    `
    const config = { title: '${props[0].split('\n')[0].replace('# ', '')}' }
    export default config`,
  PerttierConfig))
}

exports.getDemoRoutes = (paths = [], dirPath) => {
  const routerConfig = paths.map((item) => {

    return `{
      path: '/${item}',
      component: require('../views/${item}').default,
      title: require('../views/${item}/config').default.title
    }`
  })

  const data = `
  import { RouteProps } from 'react-router-dom'

  interface RoutesProps extends RouteProps {
    title: string
  }

  const Routes: RoutesProps[] = [
    ${routerConfig.join(',')}
  ]

  export default Routes

  `

  this.writeFile(dirPath,  Prettier.format(data, PerttierConfig))
}

exports.getMarkDownToTSX = async (suore, path) => {
  const data = fs.readFileSync(suore).toString()
  const markTxt = MD.render(data).toString().replace(/`/ig, '\\`')

  const writeData = `
const Page: React.FC = () => {
  return (
    <div className="scope-page" dangerouslySetInnerHTML={{ __html: \`${markTxt}\` }} />
  )
}

export default Page

  `

  await this.writeFile(path, Prettier.format(writeData, PerttierConfig))
}
