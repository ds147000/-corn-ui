/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import Modal, { ModalButton } from './modal'
import Protal from '../Portal'

export interface ModalOption {
  /** 提示的标题 */
  title?: string
  /** 取消按钮的文字，最多 4 个字符 */
  cancelText?: string
  /** 确认按钮的文字，最多 4 个字符 */
  confirmText?: string
  /** 是否显示取消按钮 */
  showCancel?: boolean
  /** 提示的内容 */
  content?: string
}

export interface SuccessCallbackResult {
  /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
  cancel: boolean
  /** 为 true 时，表示用户点击了确定按钮 */
  confirm: boolean
  /** 调用结果 */
  errMsg: string
}


const showModal = async (option: ModalOption): Promise<SuccessCallbackResult> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {

    try {

      const Warp: React.FC<{ onDestory(): void }> = ({ onDestory }) => {
        const [ show, setShow ] = useState(true)

        const button: ModalButton[] = [
          { text: option.confirmText || '确定', style: 'success' },
        ]

        if (option.showCancel) {
          button.push({
            text: option.cancelText || '取消',
            style: 'cancel'
          })
        }

        const onButtonClick = (index: number): void => {
          setShow(false)
          res({
            confirm: index === 0,
            cancel: index === 1,
            errMsg: 'ok'
          })
        }

        const onClose = (): void => {
          setShow(false)
          res({
            confirm: false,
            cancel: true,
            errMsg: 'ok'
          })
        }


        return (
          <Modal
            title={option.title}
            content={option.content}
            visible={show}
            onButtonClick={onButtonClick}
            onClose={onClose}
            button={button}
            onHide={onDestory}
          />
        )
      }

      await Protal.add(Warp)
    } catch (error) {
      rej({ errMsg: error.message } as SuccessCallbackResult)
    }
  })
}

export default showModal
