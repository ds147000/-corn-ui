import React from 'react'
import { View } from '@tarojs/components'
import { ActionSheetItemProps } from './interface'

export const ActionSheetItem: React.FC<ActionSheetItemProps> = ({ text, align, onClick, suffix }) => {
  return (
    <View className="xrk-actionsheet-item" onClick={onClick}>
      <View className={`xrk-as-text xrk-actionsheet-${align}`}>
        {text}
      </View>
      {suffix}
    </View>
  )
}
