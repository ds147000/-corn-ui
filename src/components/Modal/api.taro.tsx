import { showModal } from '@tarojs/taro'

const _showModal: typeof showModal = async (option = {}) => {
  option.cancelColor = '#818894'
  option.confirmColor = '#00A9FF'
  return showModal(option)
}

export default _showModal
