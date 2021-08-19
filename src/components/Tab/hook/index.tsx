/* eslint-disable import/export */
/* eslint-disable import/first */

// #if _APP === 'weapp'
export { default as useTabScroll } from './mounted.taro'


// #else
export { default as useTabScroll } from './mounted.h5'
// #endif


