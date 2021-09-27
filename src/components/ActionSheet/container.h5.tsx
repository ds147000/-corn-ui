import React, { useState } from 'react'
import { ShowActionSheetOption } from './api.h5'
import ActionSheet from './actionSheet'
import { ActionSheetItem } from './item'

interface DomProps {
  onDestory(): void
  onCancel(): void
  onSuccess(index: number): void
}

export const Container: React.FC<DomProps & ShowActionSheetOption> = ({ onDestory, onSuccess, onCancel, list }) => {
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
      onHide={onDestory}
      cancelText="取消"
    >
      {list.map((item, key) => (
        <ActionSheetItem align="center" key={item} text={item} onClick={(): void => _onSuccess(key)} />
      ))}
    </ActionSheet>
  )
}
