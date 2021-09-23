const { resolveApp, writeFile, removeDir, checkFiles } = require('./utils')
const fsExtra = require('fs-extra')
const sass = require('sass')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const pxtransform = require('postcss-pxtransform')

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
  .then(res => res.css.toString().replace('../../', ''))
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
}

// 编译Icon
// await buildIcons(packageName)

if (checkFiles(resolveApp('package-h5')).isDirectory()) {
  build('package-h5')
}

if (checkFiles(resolveApp('package-taro')).isDirectory()) {
  build('package-taro')
}
