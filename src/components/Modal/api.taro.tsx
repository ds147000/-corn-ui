import { showModal } from '@tarojs/taro'

const _showModal = async (option: showModal.Option): Promise<showModal.SuccessCallbackResult> => {
  option.cancelColor = '#818894'
  option.confirmColor = '#00A9FF'
  return showModal(option)
}

export default _showModal
