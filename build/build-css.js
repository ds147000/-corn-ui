const { resolveApp, writeFile, removeDir, checkFiles } = require('./utils')
const fsExtra = require('fs-extra')
const sass = require('sass')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const pxtransform = require('postcss-pxtransform')
const glob = require('glob')

const RollupPxtransform = pxtransform({
  platform: 'h5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }
})


function BuildStyle(path) {
  const result = sass.renderSync({ file: resolveApp(path) })

  return postcss([
    autoprefixer,
    RollupPxtransform
  ])
  .process(result.css, { from: resolveApp(path) })
  .then(res => res.css.toString().replace(/\.\.\/\.\.\//ig, ''))
}


async function build(packageName) {
  // 复制css资源文档
  if (checkFiles(resolveApp(packageName + '/styles')).isDirectory())
    await removeDir(resolveApp(packageName + '/styles'))

  if (checkFiles(resolveApp(packageName + '/assets')).isDirectory())
    await removeDir(resolveApp(packageName + '/assets'))

  await fsExtra.copy(resolveApp('src/styles'), resolveApp(packageName + '/styles'))
  await fsExtra.copy(resolveApp('src/assets'), resolveApp(packageName + '/assets'))


  // 编译mini.css
  const miniCss = await BuildStyle('src/styles/index.scss')
  writeFile(resolveApp(packageName + '/styles/index.mini.css'), miniCss)

  // 编译375设计图
  await fsExtra.copy(resolveApp('src/styles'), resolveApp(packageName + '/styles-375'))
  const fileList = glob.sync(resolveApp(packageName + '/styles-375/**/*.scss'))
  fileList.map((item) => {
    const fileContent = fsExtra.readFileSync(item).toString()
    const newfileContent = fileContent.replace(/\d+(\.?)\d*px/ig, function(match) {
      const value = parseFloat(match)
      if (value === 750) return '100vw'
      const newValue = String(Number(value) * 0.5) + 'px'
      return newValue
    })
    fsExtra.writeFileSync(item, newfileContent)
  })
}

// 编译Icon
// await buildIcons(packageName)

if (checkFiles(resolveApp('package-h5')).isDirectory()) {
  build('package-h5')
}

if (checkFiles(resolveApp('package-taro')).isDirectory()) {
  build('package-taro')
}


