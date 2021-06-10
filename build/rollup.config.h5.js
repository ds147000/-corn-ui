const { resolve } = require('path')
const Package = require('../package.json')
import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import alias from '@rollup/plugin-alias'

const resolveApp = path => resolve(__dirname, '..', path)

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/runtime',
  '@tarojs/react'
]

export default {
  input: resolveApp('src/index.ts'),
  external: externalPackages,
  output: {
    file: resolveApp(Package['main:h5']),
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    alias({
      entries: {
        '@tarojs/components': resolveApp('./node_modules/@tarojs/components-react/index.js')
      }
    }),
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: [ 'node_modules' ]
      }
    }),
    RollupCommonjs(),
    RollupTypescript({ tsconfig: resolveApp('tsconfig.json') }),
    RollupCopy({
      targets: [
        {
          src: resolveApp('src/style'),
          dest: resolveApp('dist')
        }
      ]
    })
  ]
}
