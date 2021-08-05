/* eslint-disable import/export */
/* eslint-disable import/first */

// #if _APP === 'weapp'
import Toast from './manager.taro'

export default Toast
// #else
import Toast from './mannager.h5'

export default Toast
// #endif


