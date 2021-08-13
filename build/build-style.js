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

module.exports = () => {
  const result = sass.renderSync({ file: resolveApp('src/styles/index.scss') })

  return postcss([
    autoprefixer,
    RollupPxtransform
  ])
  .process(result.css, { from: resolveApp('src/styles/index.scss') })
  .then(res => res.css)
}
