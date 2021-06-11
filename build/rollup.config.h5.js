/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:36:33
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 14:46:22
 */
const { resolve } = require('path')
const Package = require('../package.json')
import RollupBabel from '@rollup/plugin-babel'
import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import RollupJscc from 'rollup-plugin-jscc'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const resolveApp = path => resolve(__dirname, '..', path)

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/react',
  '@babel/runtime'
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
    RollupJscc({
      values: { _APP: 'h5' }
    }),
    alias({
      entries: {
        '@tarojs/components': resolveApp('./node_modules/@tarojs/components-react/index.js'),
        '@tarojs/taro': resolveApp('./node_modules/@tarojs/taro-h5')
      }
    }),
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules']
      }
    }),
    RollupCommonjs(),
    RollupTypescript({ tsconfig: resolveApp('tsconfig.json') }),
    RollupBabel({
      exclude: ['node_modules/**', 'example/**', 'example-react/**'],
      extensions: [ // 扩展文件名
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      babelHelpers: 'runtime',
      configFile: resolveApp('./babel.config.h5.js')
    })
  ]
}
