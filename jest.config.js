/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-05-12 14:55:35
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 18:53:16
 */

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@tarojs/components': '@tarojs/components-react/index.js',
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.ts'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.esm.js?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/example-weapp/',
    '/example-react/',
    '/docs/',
    '/package-taro/',
    '/package-h5/'
  ],
  globals: {
    'process.env.TARO_ENV': 'h5',
    '__isBrowser__': true
  },
  rootDir: __dirname,
  moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx', 'json' ],
  transformIgnorePatterns: [ '<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$' ],
  setupFiles: [ '<rootDir>/__steups__/setup.ts' ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 80,
      statements: -10
    }
  }
}
