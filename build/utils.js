const { resolve } = require('path')

exports.resolveApp = (path) => resolve(__dirname, '..', path)
