import { previewImage } from '@tarojs/taro'
import { previewImageOption } from './interface'

const _previewImage = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  return previewImage(option)
}

export default _previewImage
