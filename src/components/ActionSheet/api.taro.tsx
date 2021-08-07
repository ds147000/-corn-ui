import Taro from '@tarojs/taro'

export interface ShowActionSheetOption {
  /** 选项数组，Taro端数组长度最大为 6，H5端不限制 */
  list: string[]
}

export type ShowActionSheet = (option: ShowActionSheetOption) => Promise<Taro.showActionSheet.SuccessCallbackResult>


const showActionSheet: ShowActionSheet = async (option) => {
  const _option: Taro.showActionSheet.Option = {
    itemList: option.list || [],
    itemColor: '#242629'
  }
  return Taro.showActionSheet(_option)
}

export default showActionSheet
