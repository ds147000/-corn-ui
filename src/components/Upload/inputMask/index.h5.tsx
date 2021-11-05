import React from 'react'
import Toast from '../../Toast'
import { InputMaskProps } from './typeing'
import { checkFileType, getFileSuffix } from './utils/suffix'

export const InputMask: React.FC<InputMaskProps> = ({ type, onChange }) => {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    if (checkFileType(event.target.files as FileList, type)) {
      Toast.show('文件类型错误，请重新选择')
      return
    }
    onChange?.(event.target.files as FileList)
  }

  return (
    // eslint-disable-next-line react/forbid-elements
    <input
      className="xrk-upload-mask"
      data-testid="uplaod-btn"
      type="file"
      accept={getFileSuffix(type)}
      onChange={_onChange}
      multiple
    />
  )
}
