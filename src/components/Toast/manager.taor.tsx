import Taro from '@tarojs/taro'
import type { ToastOption } from './interface'

class ToastManager {
  show(option: ToastOption): void {
    if (!option.icon) option.icon = 'none'
    if (!option.duration) option.duration = 1500

    Taro.hideToast(option)
  }

  hide(): void {
    Taro.hideToast()
  }
}

export default new ToastManager()
