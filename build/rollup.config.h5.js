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
import RollupAlias from '@rollup/plugin-alias'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupJscc from 'rollup-plugin-jscc'
import BuildCss from './rollup.config.css'
import RollupStyles from 'rollup-plugin-styles'
import { DEFAULT_EXTENSIONS } from '@babel/core'
const { resolveApp, removeDir } = require('./utils')


if (process.env.NODE_ENV === 'production') removeDir('package-h5')

// 应被保留在外部的依赖
const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/react',
  '@babel/runtime',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@atrojs/api',
  'react-dom/server',
  'qs',
  'swiper'
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

      assetFileNames: ({ name }) => {
        if (name.indexOf('.css') !== -1) return name
        return '[name]-[hash][extname]'
      },

      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    RollupJscc({
      values: { _APP: 'h5' }
    }),
    RollupStyles({
      mode: ['extract', 'index.css'],
      sourceMap: false,
      dts: false
    }),
    RollupAlias({
      entries: {
        'weui': resolveApp('build/mock/weui')
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
      exclude: ['node_modules/**', 'example-weapp/**', 'example-react/**'],
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
              transform: (importName) => {
                switch (importName) {
                  case 'Swiper':
                    return `@tarojs/components-react/src/components/swiper/hepler`

                  case 'SwiperItem':
                    return `@tarojs/components-react/src/components/swiper/hepler/item`

                  default:
                    return `@tarojs/components-react/src/components/${importName.toLocaleLowerCase()}`
                }
              },
              preventFullImport: true
            }
          }
        ]
      ]
    }),
    BuildCss('package-h5')
  ]
}
