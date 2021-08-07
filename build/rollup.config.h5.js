/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:36:33
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 14:46:22
 */
const Package = require('../package.json')
import RollupBabel from '@rollup/plugin-babel'
import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import RollupJscc from 'rollup-plugin-jscc'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import ChangeInput from './changInput'
const { resolveApp } = require('./utils')

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/react',
  '@babel/runtime',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveApp('src/index.ts'),
  external: externalPackages,
  output: [
    {
      file: resolveApp(Package['main:h5']),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveApp(Package['module:h5']),
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    RollupJscc({
      values: { _APP: 'h5' }
    }),
    alias({
      entries: {
        '@tarojs/components': resolveApp('./build/mock/components')
      }
    }),
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules']
      }
    }),
    RollupCommonjs(),
    RollupTypescript({ tsconfig: resolveApp('tsconfig.json') }),
    ChangeInput(),
    RollupBabel({
      exclude: ['node_modules/**', 'example/**', 'example-react/**'],
      extensions: [ // 扩展文件名
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime']
    })
  ]
}
