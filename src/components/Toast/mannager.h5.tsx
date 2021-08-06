/* eslint-disable no-magic-numbers */
import React from 'react'
import { Container } from './container.h5'
import { DEFAULT_DURATION, ToastOption } from './interface'
import Protal from '../Portal'
import Sub from '../../utils/sub'
import { TOAST_ADD } from '../../config/event'

const SuoreID = { value: -1 }
const ID = new Proxy(SuoreID, {
  set(target, prop, value): boolean {
    if (prop === 'value' && value === -1) {
      const oldId = target.value
      Protal.remove(oldId)
    }

    return Reflect.set(target, prop, value)
  }
})

class ToastManager {

  private async _init(): Promise<void> {
    if (ID.value !== -1) return Promise.resolve()

    // 因为是桢调用，所有需要延迟
    return new Promise((res) => {
      Protal.add(<Container key="toast" onShow={res} onClose={(): void => this.hide()} />)
        .then((id) => ID.value = id)
    })
  }

  async show(option: ToastOption | string): Promise<void> {
    await this._init()

    const _options: ToastOption = typeof option === 'string' ? { title: option } : option

    if (!_options.icon) _options.icon = 'none'
    if (!_options.duration) _options.duration = DEFAULT_DURATION

    try {
      Sub.emit(TOAST_ADD, _options)

    } catch (error) {
      _options.fail?.()
    }
  }

  /** 隐藏toast并且清除后续所有的taost消息队列 */
  hide(): void {
    ID.value = -1
  }

}

export default new ToastManager()
