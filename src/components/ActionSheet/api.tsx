/* eslint-disable import/export */
// #if _APP === 'weapp'
import showActionSheet from './api.taro'

export default showActionSheet

// #else
// eslint-disable-next-line import/first
import showActionSheetH5 from './api.h5'

export default showActionSheetH5
// #endif
