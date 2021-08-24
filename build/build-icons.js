const global = require('glob')
const webfontsGenerator = require('@vusion/webfonts-generator')
const Prettier = require('prettier')
const fs = require('fs')
const { resolveApp, writeFile } = require('./utils')


module.exports = async (packageName) => {

    const IconsFiles = global.sync(resolveApp('src/assets/icons/*.svg'))

    webfontsGenerator({
      files: IconsFiles,
      fontName: 'xrkIcon',
      dest: resolveApp(packageName + '/icons/fonts/'),
      cssDest: resolveApp(packageName + '/icons/style.scss'),
      cssFontsPath: './fonts/',
      cssTemplate: resolveApp('build/build-icons-scss.hbs'),
      normalize: true
    })

    const IconNames = IconsFiles.map((item) => {
      return item.replace(/.*\//, '').replace('icon-', '').replace('.svg', '')
    })

    return new Promise((res) => {
      setTimeout(() => {
        const cssFile = fs.readFileSync(resolveApp(packageName + '/icons/style.scss')).toString()
        writeFile(resolveApp(packageName + '/icons/style.scss'), Prettier.format(cssFile, { parser: 'scss' }))

        // 写入Md文件
        const MarkContext = `
---header
sort: 1
style: block
---
### 代码演示

\`\`\`tsx
import { Icon } from '@xrkmm/ui-h5'

const Demo: React.FC = () => {

  return (
    <div>
      ${IconNames.map((item) => (
        `
<div className="icon-box">
  <Icon name="${item}" />
  <h5>${item}</h5>
</div>
`
)).join('')}
    </div>
  )
}

export default Demo
\`\`\`

\`\`\`css

  .icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    transition: all 0.5s;
    font-size: 30px;

    h5 {
      font-size: 12px;
    }

    &:hover {
      transform: scale(1.1);
      background-color: #ffe400;
    }
  }
\`\`\`

\`name\`属性传入图标名称使用图标
`

        writeFile(resolveApp('src/components/Icon/demo/basis.md'), Prettier.format(MarkContext, { parser: 'markdown' }))
        res()
      }, 100)
    })
}
