/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:40:22
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 10:41:58
 */
module.exports = {
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'taro/react',
    'plugin:xrkmm/react'
  ],
  plugins: [ 'xrkmm' ],
  rules: {
    '@typescript-eslint/no-namespace': 0
  }
}
