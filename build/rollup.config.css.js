/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:33:14
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 16:11:52
 */

import RollupResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupCopy from 'rollup-plugin-copy'
import image from '@rollup/plugin-image'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import pxtransform from 'postcss-pxtransform'
import { resolveApp } from './utils'


const RollupPxtransform = pxtransform({
  platform: 'h5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }
})

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
  input: resolveApp('src/styles/index.js'),
  external: externalPackages,
  output: {
    file: 'dist-css/index.js',
    format: 'cjs',
    sourcemap: false
  },
  plugins: [
    sass({
        output: resolveApp('dist/xrkmm.mini.css'),
        processor: css => postcss([
          autoprefixer,
          RollupPxtransform
        ])
            .process(css)
            .then(res => res.css)
    }),
    image(),
    RollupResolve({
      customResolveOptions: {
        moduleDirectories: [ 'node_modules' ]
      }
    }),
    RollupCommonjs(),
    RollupCopy({
      targets: [
        {
          src: resolveApp('src/styles'),
          dest: resolveApp('dist'),
          copyOnce: true
        },
        {
          src: resolveApp('src/assets'),
          dest: resolveApp('dist'),
          copyOnce: true
        }
      ]
    })
  ]
}
