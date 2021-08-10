const global = require('glob')
const webfontsGenerator = require('@vusion/webfonts-generator')
const Prettier = require('prettier')
const fs = require('fs')
const { resolveApp, writeFile } = require('./utils')


export default (packageName) => ({

  writeBundle: async () => {

    webfontsGenerator({
      files: global.sync(resolveApp('src/assets/icons/*.svg')),
      fontName: 'xrkIcon',
      dest: resolveApp(packageName + '/icons/fonts/'),
      cssDest: resolveApp(packageName + '/icons/style.scss'),
      cssFontsPath: './fonts/',
      templateOptions: {
        classPrefix: 'xrk-i-',
        baseSelector: 'xrk-i'
      },
      cssTemplate: resolveApp('build/build-icons-scss.hbs'),
      normalize: true
    })

    return new Promise((res) => {
      setTimeout(() => {
        const cssFile = fs.readFileSync(resolveApp(packageName + '/icons/style.scss')).toString()
        writeFile(resolveApp(packageName + '/icons/style.scss'), Prettier.format(cssFile, { parser: 'scss' }))

        res()
      }, 100)
    })
  }
})
