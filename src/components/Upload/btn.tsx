import { View } from '@tarojs/components'
import React from 'react'
import Icon from '../Icon'
import InputMask from './inputMask'
import { InputMaskProps } from './inputMask/typeing'

export const UploadDefaultBtn: React.FC<InputMaskProps> = (props) => {
  return (
    <View className="xrk-upload-btn xrk-f xrk-ac xrk-jc" data-testid="upload-btn">
      <InputMask {...props} />
      <Icon name="img" />
    </View>
  )
}
