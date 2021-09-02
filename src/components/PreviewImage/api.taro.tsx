import { previewImage } from '@tarojs/taro'
import { previewImageOption } from './typeing'

const _previewImage = async (option: previewImageOption): Promise<{ errMsg: string }> => {
  return previewImage(option)
}

export default _previewImage
