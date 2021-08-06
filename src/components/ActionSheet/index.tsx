/* eslint-disable import/export */
// #if _APP === 'weapp'
export { default as showActionSheet } from './api.taro'

// #else
export { default as showActionSheet } from './api.h5'
// #endif
