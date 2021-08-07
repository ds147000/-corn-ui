/* eslint-disable import/export */
// #if _APP === 'weapp'
import showActionSheet from './api.taro'

export default showActionSheet

// #else
// eslint-disable-next-line import/first
import showActionSheet from './api.h5'

export default showActionSheet
// #endif
