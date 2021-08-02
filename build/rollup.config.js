/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:33:14
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 14:46:32
 */

const Package = require('../package.json')
import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupJscc from 'rollup-plugin-jscc'
import RollupBabel from '@rollup/plugin-babel'
import { resolveApp } from './utils'

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/components-react',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react',
  '@babel/runtime',
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
    RollupJscc({
      values: { _APP: 'weapp' }
    }),
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: [ 'node_modules' ]
      }
    }),
    RollupCommonjs(),
    RollupTypescript({ tsconfig: resolveApp('tsconfig.json') }),
    RollupBabel({
      exclude: ['node_modules/**', 'example/**', 'example-react/**'],
      configFile: resolveApp('./babel.config.js')
    })
  ]
}
