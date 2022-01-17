/* eslint-disable no-magic-numbers */
import { Container } from './container.h5'
import { DEFAULT_DURATION, ToastOption } from './typing'
import Protal from '../Portal'
import Sub from '../../utils/sub'
import { TOAST_ADD } from '../../config/event'

class ToastManager {
  private status = false

  private async _init(): Promise<void> {
    if (this.status) return Promise.resolve()
    this.status = true

    // 因为是桢调用，所有需要延迟
    return new Promise((res) => {
      Protal.add(Container, {
        onShow: res,
        onHide: () => {
          this.status = false
        } })
    })
  }

  async show(option?: ToastOption | string): Promise<void> {
    await this._init()
    if (!option) return

    const _options: ToastOption = typeof option === 'string' ? { title: option } : option

    if (!_options.icon) _options.icon = 'none'
    if (!_options.duration) _options.duration = DEFAULT_DURATION

    try {
      Sub.emit(TOAST_ADD, _options)

    } catch (error) {
      _options.fail?.()
    }
  }

}

export default new ToastManager()
