import React from 'react'
import { View } from '@tarojs/components'

export interface ActionSheetItemProps {
  align?: 'left' | 'center' | 'right'
  text?: string
  suffix?: React.ReactNode | string
  onClick?(): void
}

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
