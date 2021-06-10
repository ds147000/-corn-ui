/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:33:14
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 15:56:25
 */

const { resolve } = require('path')
const Package = require('../package.json')
import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'

const resolveApp = path => resolve(__dirname, '..', path)

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/components-react',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveApp('src/index.ts'),
  external: externalPackages,
  output: [
    {
      file: resolveApp(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveApp(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: [ 'node_modules' ]
      }
    }),
    RollupCommonjs(),
    RollupTypescript({ tsconfig: resolveApp('tsconfig.json') })
  ]
}
