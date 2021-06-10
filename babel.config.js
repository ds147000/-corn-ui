/*
 * @Description:
 * @Author:
 * @Date: 2021-04-17 18:25:36
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-04-20 19:46:27
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      ios: 10
    }]
  ]
}
