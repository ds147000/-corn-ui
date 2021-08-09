/* eslint-disable no-magic-numbers */
import  React, { useState } from 'react'
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

interface DomProps extends ModalOption {
  onClick(SuccessCallbackResult): void
  onHide(): void
}

const Dom: React.FC<DomProps> = ({
  title,
  cancelText = '取消',
  confirmText = '确定',
  showCancel,
  content,
  onClick,
  onHide
}) => {
  const [ show, setShow ] = useState(true)
  const button: ModalButton[] = [
    { text: confirmText, style: 'success' },
  ]

  if (showCancel) button.push({ text: cancelText, style: 'cancel' })

  const onButtonClick = (index: number): void => {
    setShow(false)
    onClick?.({
      confirm: index === 0,
      cancel: index === 1,
      errMsg: 'ok'
    })
  }


  return (
    <Modal
      title={title}
      content={content}
      visible={show}
      onButtonClick={onButtonClick}
      button={button}
      onHide={onHide}
    />
  )
}

const showModal = async (option: ModalOption): Promise<SuccessCallbackResult> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej) => {
    let id: number

    const remove = (): void => {
      Protal.remove(id)
    }

    try {
      id = await Protal.add(<Dom {...option} onHide={remove} onClick={res} />)
    } catch (error) {
      rej({ errMsg: error.message } as SuccessCallbackResult)
    }
  })
}

export default showModal
