/* eslint-disable no-magic-numbers, import/export, @typescript-eslint/adjacent-overload-signatures */

// #if _APP === 'weapp'
import transformRem from './index.taro'
// #else
import transformRem from './index.h5'
// #endif

export default transformRem
