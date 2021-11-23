// #if _APP !== 'weapp'
import React, { useState } from 'react'
import XiaokuiModal, { XIAO_KUI_MODAL } from './container'
import Protal from '../Portal'
// #endif

async function showXiaokuiModal(options: XIAO_KUI_MODAL.BaseProps): Promise<XIAO_KUI_MODAL.Result> {
  // #if _APP !== 'weapp'
  return new Promise((res, rej) => {
    const Modal: React.FC<{ onDestory(): void }> = ({ onDestory }) => {
      const [ visible, setVisible ] = useState(true)

      const onClick = (item: XIAO_KUI_MODAL.Btn, index: number): void => {
        res({ item, index })
        setVisible(false)
      }

      const onClose = (): void => {
        setVisible(false)
        rej()
      }

      return (
        <XiaokuiModal
          visible={visible}
          onClick={onClick}
          onClose={onClose}
          onHide={onDestory}
          {...options}
        />
      )
    }

    Protal.add(Modal)
  })
  // #else
  // eslint-disable-next-line no-unreachable
  return Promise.reject()
  // #endif
}

export default showXiaokuiModal
