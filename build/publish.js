const Prettier = require('prettier')
const commonPackage = require('../package.json')
const shell = require('shelljs')
const { removeDir, checkFiles, resolveApp, writeFile } = require('./utils')

const PerttierConfig = {
  semi: false,
  parser: 'json',
  singleQuote: true,
  embeddedLanguageFormatting: 'off'
}

const WeappPackagePath = resolveApp('package-taro/package.json')
const H5PackagePath = resolveApp('package-h5/package.json')
const IconsPackagePath = resolveApp('package-icons/package.json')


if (checkFiles(WeappPackagePath).isFile()) {
  removeDir(WeappPackagePath)
}

if (checkFiles(H5PackagePath).isFile()) {
  removeDir(H5PackagePath)
}

// 删除开发依赖
commonPackage.devDependencies = {}
// 删除脚步
commonPackage.scripts = {}

// 微信包配置
const WeappPackage = JSON.parse(JSON.stringify(commonPackage))
WeappPackage.name += '-taro'
WeappPackage.main = 'dist/index.js'
WeappPackage.module = 'dist/index.esm.js'
WeappPackage.private = false
delete WeappPackage.peerDependencies.swiper
delete WeappPackage.peerDependencies['react-router-dom']
delete WeappPackage.dependencies['react-router-dom']

// 写入package
writeFile(WeappPackagePath, Prettier.format(JSON.stringify(WeappPackage), PerttierConfig))


// H5包配置
const H5Package = JSON.parse(JSON.stringify(commonPackage))
H5Package.name += '-h5'
H5Package.main = 'dist/index.js'
H5Package.module = 'dist/index.esm.js'
H5Package.private = false

// 删除peerDependencies 多余配置
delete H5Package.peerDependencies['@tarojs/components']
delete H5Package.peerDependencies['@tarojs/components-react']
delete H5Package.peerDependencies['@tarojs/react']

// 写入package
writeFile(H5PackagePath, Prettier.format(JSON.stringify(H5Package), PerttierConfig))

// 图标包配置
const IconsPackage = JSON.parse(JSON.stringify(commonPackage))
IconsPackage.name = '@xrkmm/icons'
IconsPackage.main = 'style.css'
IconsPackage.private = false
IconsPackage.files = ['fonts', 'style.css']


// 删除peerDependencies 多余配置
IconsPackage.peerDependencies = {}
IconsPackage.dependencies = {}


// 写入package
writeFile(IconsPackagePath, Prettier.format(JSON.stringify(IconsPackage), PerttierConfig))

// 发布
shell.cd(resolveApp('package-taro'))
shell.exec('npm pub')

shell.cd(resolveApp('package-h5'))
shell.exec('npm pub')

shell.cd(resolveApp('package-icons'))
shell.exec('npm pub')
