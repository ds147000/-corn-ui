import Protal from '../Portal'
import { Container } from './container.h5'

export interface SuccessCallbackResult {
  tapIndex: number
  errMsg: string
}

export interface ShowActionSheetOption {
  /** 选项数组，Taro端数组长度最大为 6，H5端不限制 */
  list: string[]
}

export type ShowActionSheet = (option: ShowActionSheetOption) => Promise<SuccessCallbackResult>



const showActionSheet: ShowActionSheet = async (option) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise( async (res, rej) => {
    const cancel = (): void => rej({ tapIndex: -1, errMsg: '用户取消' })

    const success = (index: number): void => {
      res({
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: index,
        /** 调用结果 */
        errMsg: 'ok'
      })
    }

    try {
      await Protal.add(Container, { ...option, onSuccess: success, onCancel: cancel })

    } catch (error) {
      rej({ tapIndex: -1, errMsg: error.message })
    }
  })

}

export default showActionSheet
