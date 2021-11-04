/* eslint-disable import/export */
/* eslint-disable import/first */

// #if _APP === 'weapp'
import { InputMask } from './index.taro'

export default InputMask
// #else
import { InputMask } from './index.h5'

export default InputMask
// #endif
