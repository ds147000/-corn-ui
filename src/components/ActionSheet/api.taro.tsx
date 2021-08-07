import Taro from '@tarojs/taro'
import { ShowActionSheet } from './interface'

const showActionSheet: ShowActionSheet = async (option) => {
  const _option: Taro.showActionSheet.Option = {
    itemList: option.list || [],
    itemColor: '#242629'
  }
  return Taro.showActionSheet(_option)
}

export default showActionSheet
