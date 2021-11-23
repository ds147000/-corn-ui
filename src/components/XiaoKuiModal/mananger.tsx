/* eslint-disable import/export */
/* eslint-disable import/first */
// #if _APP === 'weapp'
import mananger from './mananger.taro'
// #else
import mananger from './mananger.h5'
// #endif


export default mananger
