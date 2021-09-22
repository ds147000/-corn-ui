import React from 'react'
import { View } from '@tarojs/components'
import type { TimeRenderItem } from './index'

export const DefualtRenderItem: TimeRenderItem = (type, value, last): JSX.Element => {
  if (type === 'day') {
    return (
      <>
        <View className="xrk-f xrk-ac xrk-jc xrk-timer-day" data-testid={type} >
          {value}天
        </View>
      </>
    )
  }

  if (last) {
    return (
      <View className="xrk-timer-item xrk-f xrk-ac xrk-jc" data-testid={type} >
        {value}
      </View>
    )
  }

  return (
    <>
      <View className="xrk-timer-item xrk-f xrk-ac xrk-jc" data-testid={type} >
        {value}
      </View>
      <View className="xrk-timer-symbol">:</View>
    </>
  )
}
