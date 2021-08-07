import React, { useState } from 'react'
import { ShowActionSheet, ShowActionSheetOption } from './interface'
import ActionSheet from './actionSheet'
import { ActionSheetItem } from './item'
import Protal from '../Portal'

interface DomProps {
  onClose(): void
  onCancel(): void
  onSuccess(index: number): void
}

const Dom: React.FC<DomProps & ShowActionSheetOption> = ({ onClose, onSuccess, onCancel, list }) => {
  const [ show, setShow ] = useState(true)

  const _onClose = (): void => {
    setShow(false)
    onCancel()
  }

  const _onSuccess = (index: number): void => {
    setShow(false)
    onSuccess(index)
  }

  return (
    <ActionSheet
      showCancel
      showHead={false}
      visible={show}
      onClose={_onClose}
      onHide={onClose}
    >
      {list.map((item, key) => (
        <ActionSheetItem key={item} text={item} onClick={(): void => _onSuccess(key)} />
      ))}
    </ActionSheet>
  )
}

const showActionSheet: ShowActionSheet = async (option) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise( async (res, rej) => {
    let id: number

    const remove = (): void => Protal.remove(id)

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
      id = await Protal.add(
        <Dom
          {...option}
          key="as"
          onClose={remove}
          onSuccess={success}
          onCancel={cancel}
        />
      )

    } catch (error) {
      rej({ tapIndex: -1, errMsg: error.message })
    }
  })

}

export default showActionSheet
