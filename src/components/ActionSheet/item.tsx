import React from 'react'
import { View } from '@tarojs/components'

export interface ActionSheetItemProps {
  align?: 'left' | 'center' | 'right'
  text?: React.ReactNode | string
  suffix?: React.ReactNode | string
  onClick?(): void
}

export const ActionSheetItem: React.FC<ActionSheetItemProps> = ({ text, align, onClick, suffix }) => {
  return (
    <View className="corn-actionsheet-item" onClick={onClick}>
      <View className={`corn-as-text corn-actionsheet-${align}`}>
        {text}
      </View>
      {suffix}
    </View>
  )
}
