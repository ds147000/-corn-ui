/* eslint-disable import/export */
/* eslint-disable import/first */

// #if _APP === 'weapp'
import previewImage from './api.taro'

export default previewImage

// #else
import previewImage from './api.h5'


export default previewImage
// #endif
