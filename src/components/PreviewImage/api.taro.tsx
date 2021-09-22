import { previewImage } from '@tarojs/taro'
import type { previewImageOption } from './index'

const _previewImage = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  return previewImage(option)
}

export default _previewImage
