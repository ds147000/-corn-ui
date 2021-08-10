const sass = require('sass')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const pxtransform = require('postcss-pxtransform')
const { resolveApp, writeFile } = require('./utils')

const RollupPxtransform = pxtransform({
  platform: 'h5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }
})

const result = sass.renderSync({
  file: resolveApp('src/styles/index.scss')
})

postcss([
  autoprefixer,
  RollupPxtransform
])
.process(result.css, { from: resolveApp('src/styles/index.scss') })
.then(res => {
  try {
    writeFile(resolveApp('package-h5/dist/styles/index.css'), res.css)

  } catch (error) {

  }
  try {
    writeFile(resolveApp('package-taro/dist/styles/index.css'), res.css)
  } catch (error) {

  }
})
