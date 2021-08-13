const BuildStyle = require('./build-style')
const buildIcons = require('./build-icons')
const { resolveApp, writeFile, removeDir, checkFiles } = require('./utils')
const fsExtra = require('fs-extra')
const fs = require('fs')

export default (packageName) => {
  return {
    async writeBundle(options) {
      const { file } = options
      if (/index\.esm\.js/.test(file) === false) return

      // 复制css资源文档
      await removeDir(resolveApp(packageName + '/dist/styles'))
      await removeDir(resolveApp(packageName + '/dist/assets'))
      await fsExtra.copy(resolveApp('src/styles'), resolveApp(packageName + '/dist/styles'))
      await fsExtra.copy(resolveApp('src/assets'), resolveApp(packageName + '/dist/assets'))

      // 编译mini.css
      const css = await BuildStyle()
      writeFile(resolveApp(packageName + '/dist/styles/index.css'), css)

      // 移动基础css
      if (checkFiles(resolveApp(packageName + '/dist/index.esm.css')).isFile())
        fs.rmSync(resolveApp(packageName + '/dist/index.esm.css'))

      if (checkFiles(resolveApp(packageName + '/dist/index.css')).isFile()) {
        const baseCss = fs.readFileSync(resolveApp(packageName + '/dist/index.css'))
        fs.rmSync(resolveApp(packageName + '/dist/index.css'))
        writeFile(resolveApp(packageName + '/dist/styles/base.css'), baseCss)
      }

      // 编译Icon
      await buildIcons(packageName)
    }
  }
}
