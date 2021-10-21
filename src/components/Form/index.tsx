/* eslint-disable import/export */
/* eslint-disable import/first */
// #if _APP === 'weapp'
import Form from './index.taro'

export default Form
// #else
import Form from './index.h5'

export default Form
// #endif
