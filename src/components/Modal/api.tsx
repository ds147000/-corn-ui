/* eslint-disable import/export */
// #if _APP === 'weapp'
import showModal from './api.taro'

export default showModal

// #else
// eslint-disable-next-line import/first
import showActionSheet from './api.h5'

export default showActionSheet
// #endif
