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
  'swiper',
  'swiper/react',
  'react-router-dom',
  'react-router'
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
        /**
        * 使用 babel-plugin-transform-imports 插件修改 import @tarojs/components 的引入为 @tarojs/components-react
        * 来降低React端组件包的体积，因为 @tarojs/components 会把 taro 的其他依赖打包到组件内，导致体积非常大
        */
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
                    return `@tarojs/components-react/dist/${importName.toLocaleLowerCase()}`
                }
              },
              preventFullImport: true
            }
          }
        ]
      ]
    }),
  ]
}
