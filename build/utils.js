const fs = require('fs')
const fsExtra = require('fs-extra')
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

exports.checkFiles = (path) => {
  try {
    const file = fs.statSync(path)
    return file
  } catch (error) {
    return {
      isFile: () => false,
      isDirectory: () => false
    }
  }
}


exports.resolveApp = (path) => resolve(__dirname, '..', path)

exports.writeFile = (path, data) => {
  try {
    if (this.checkFiles(path).isFile()) fsExtra.rmdirSync(path)
  } catch (error) {

  }

  fs.writeFileSync(path, data)
}

exports.removeDir = async (path) => {
  try {
    const dir = this.checkFiles(path)
    if (dir.isDirectory()) fsExtra.rmdirSync(path, { recursive: true })

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

const getMarkDownContent = (path) => {
  const fileHeader = new Map()

  let content = fs.readFileSync(path).toString()

  // 是否存在文件头配置
  if (content.indexOf('---header') !== -1) {
    content = content.replace('---header')
    const lastIndex = content.indexOf('---')

    // 获取头部说明
    content.slice(0, lastIndex)
      .split('\n')
      .filter(Boolean)
      .map((item) => item.split(':').map((item) => item.trim()))
      .map((item) => fileHeader.set(item[0], item[1]))
    // 删除头部说明
    content = content.slice(lastIndex + 3)

  }

  return {
    content,
    sort: fileHeader.get('sort'),
    style: fileHeader.get('style'),
    type: fileHeader.get('type'),
    title: content.match(/#.*\n/)[0].replace(/#*/, '').trim()
  }
}

exports.getMarkDownTemplate = async (paths = [], dirPath) => {
  // 取出props索引
  const propsIndex = paths.findIndex((item) => /props\.md/.test(item))
  const propsPath = paths[propsIndex]
  // 去除props文件地址
  paths.splice(propsIndex, 1)

  // 处理属性说明文档
  const propsMarkDownContent = getMarkDownContent(propsPath)
  const props = propsMarkDownContent.content.split('<demo>')

  // 切割头部和尾部
  const header = MD.render(props[0])
  const floor = MD.render(props[1] || '')

  // 处理代码演示内容
  const content = paths.map((path) => {
    const last = path.lastIndexOf('/')
    const fileName = path.slice(last + 1).replace('.md', '').replace(/\d\./, '')

    // 返回内容
    const MarkdownContent = getMarkDownContent(path)
    const data = { body: '', key: fileName, sort: MarkdownContent.sort, path: `/phone/${dirPath.replace(/.*\/views\//, '')}/demo/${fileName}` }

    // 获取演示代码部分
    const startIndex = MarkdownContent.content.indexOf('```tsx')
    const lastIndex = MarkdownContent.content.lastIndexOf('```')
    const code = MarkdownContent.content.slice(startIndex + 6, lastIndex).split('```css')
    let jsCode = ''

    if (code.length > 1) {
      jsCode = code[0].slice(0, code.indexOf('```css'))
      jsCode = jsCode.slice(0, jsCode.lastIndexOf('```'))
    } else {
      jsCode = code[0]
    }
    const cssCode = code.length > 1 ? code[1] : null


    // 生成对应code文件
    // data.header = `import ${fileName} from './demo/${fileName}'`

    const compDis = dirPath + '/demo'
    if (!this.checkFiles(compDis).isDirectory()) this.makeDir(compDis)

    if (cssCode) {

      this.writeFile(compDis + `/${fileName}.tsx`, Prettier.format(
        `
        import './${fileName}-style.scss'
        ${jsCode}
        `
        , PerttierConfig))

      this.writeFile(compDis + `/${fileName}-style.scss`, Prettier.format(cssCode, { parser: 'css' }))

    } else {
      this.writeFile(compDis + `/${fileName}.tsx`, Prettier.format(jsCode, PerttierConfig))
    }

    // 修改代码存放方式
    const markHeader = MD.render(MarkdownContent.content.slice(0, startIndex))
    const markContentCode = MD.render(MarkdownContent.content.slice(startIndex, lastIndex + 3))
    const markFloor = MD.render(MarkdownContent.content.slice(lastIndex + 3))

    data.body = `
      <div className="${MarkdownContent.style === 'block' ? 'demo-box-block' : 'demo-box'}">
        ${markHeader.replace(/class=/ig, 'className=')}
        <div className={\`demo \$\{ url === '${data.path}' ? 'demo-active' : '' \}\`}>
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={() => {
                  changeUrl('${data.path}')
                }}
              >
                预览效果
              </Button>
          <Divider orientation="left">描述</Divider>
          ${markFloor.replace(/class=/ig, 'className=')}
          <div className="action-cell">
            <Tooltip title="复制代码">
              <CopyToClipboard text={\`${jsCode}\`}>
                <Button shape="circle" icon={<CopyOutlined />} />
              </CopyToClipboard>
            </Tooltip>
            <Tooltip title="查看代码">
              <Button shape="circle" icon={<CodeSandboxOutlined />} onClick={() => _set${data.key}(!_${data.key})} />
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
  }).sort((item, item2) => item.sort - item2.sort)

  const result = `/* eslint-disabled */\n//
    import { useState, useEffect, useContext } from 'react'
    import { Divider, Tooltip, Button } from 'antd'
    import { CodeSandboxOutlined, CopyOutlined, PlayCircleOutlined } from '@ant-design/icons'
    import { CopyToClipboard } from 'react-copy-to-clipboard'
    import { IphoneContext } from '../../components/layout/ipohone'

    const Pgae: React.FC = () => {
      ${content.map((item) => `const [_${item.key}, _set${item.key}] = useState(false)`).join('\n')}
      const { changeUrl, url } = useContext(IphoneContext)

      useEffect(() => {
        changeUrl('${content[0].path}')
        _set${content[0].key}(true)
      }, [])

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
}

exports.getDemoRoutes = (paths = [], dirPath) => {
  const routerConfig = paths
    .map((item) => {
      const { sort, type, title } = getMarkDownContent(item)

      if (item.indexOf('props.md') !== -1) {
        return `{
          path: '/doc/${item.replace(/\/demo\/props\.md/, '').replace(/.*\//, '')}',
          component: require('../views/${item.replace(/\/demo\/props\.md/, '').replace(/.*\//, '')}').default,
          title: '${title}',
          type: '${type}',
          sort: ${sort}
        }`
      }

      if (item.indexOf('/components/') !== -1) {
        return `{
          path: '/phone/${item.replace(/\.md/, '').replace(/.*\/components\//, '')}',
          component: require('../views${item.replace(/\.md/, '').replace(/.*\/components/, '')}').default,
          title: '${title}',
          type: '${type}',
          sort: ${sort}
        }`
      }

      return `{
        path: '/phone/${item.replace(/\.md/, '').replace(/.*\/utils/, 'utils')}',
        component: require('../views${item.replace(/\.md/, '').replace(/.*\/utils/, '/utils')}').default,
        title: '${title}',
        type: '${type}',
        sort: ${sort}
      }`

    })

  const data = `
  import { RouteProps } from 'react-router-dom'

  interface RoutesProps extends RouteProps {
    title: string;
    type: string;
    sort: number;
  }

  const Routes: RoutesProps[] = [
    ${routerConfig.join(',')}
  ]

  export default Routes

  `

  this.writeFile(dirPath, Prettier.format(data, PerttierConfig))
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
