/* eslint-disable import/export */
/* eslint-disable import/first */

// #if _APP === 'weapp'
import Image from './index.taro'

export default Image

// #else
import Image from './index.h5'


export default Image
// #endif
