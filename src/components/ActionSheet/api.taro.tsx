import Taro from '@tarojs/taro'
import { ShowActionSheet } from './interface'

const showActionSheet: ShowActionSheet = async (option) => {
  const _option: Taro.showActionSheet.Option = {
    itemList: option.list || [],
    itemColor: option.color
  }
  return Taro.showActionSheet(_option)
}

export default showActionSheet
