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
import RollupCopy from 'rollup-plugin-copy'
import { eslint } from 'rollup-plugin-eslint'
const { resolveApp, removeDir } = require('./utils')

if (process.env.NODE_ENV === 'production') removeDir('dist')

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
    eslint({ throwOnError: true }),
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
      babelHelpers: 'bundled',
      exclude: ['node_modules/**', 'example/**', 'example-react/**'],
      configFile: resolveApp('./babel.config.js')
    }),
    RollupCopy({
      targets: [
        {
          src: resolveApp('src/styles/*'),
          dest: resolveApp('package-taro/dist'),
          rename: () => 'styles/px',
          copyOnce: true
        },
        {
          src: resolveApp('src/assets'),
          dest: resolveApp('package-taro/dist/'),
          copyOnce: true
        }
      ]
    })
  ]
}
