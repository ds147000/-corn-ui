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
import RollupJscc from 'rollup-plugin-jscc'
import RollupPostcss from 'rollup-plugin-postcss'
import RollupCopy from 'rollup-plugin-copy'
import { eslint } from 'rollup-plugin-eslint'
import { DEFAULT_EXTENSIONS } from '@babel/core'
const { resolveApp, removeDir } = require('./utils')


if (process.env.NODE_ENV === 'production') removeDir('dist-h5')

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
    eslint({ throwOnError: true }),
    RollupPostcss({
      inject: { insertAt: 'top' },
      extract: true
    }),
    RollupJscc({
      values: { _APP: 'h5' }
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
      plugins: [
        '@babel/plugin-transform-runtime',
        [
          'transform-imports', {
            '@tarojs/components': {
              transform: "@tarojs/components-react/src/components/${member}",
              preventFullImport: true
            }
          }
        ]
      ]
    }),
    RollupCopy({
      targets: [
        {
          src: resolveApp('src/styles'),
          dest: resolveApp('package-h5/dist'),
          rename: () => 'styles/px',
          copyOnce: true
        },
        {
          src: resolveApp('src/assets'),
          dest: resolveApp('package-h5/dist'),
          copyOnce: true
        }
      ]
    })
  ]
}
