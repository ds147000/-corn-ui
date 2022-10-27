import React from 'react'
import { View } from '@tarojs/components'
import type { TimeRenderItem } from './index'

export const DefualtRenderItem: TimeRenderItem = (type, value, last): JSX.Element => {
  if (type === 'day') {
    return (
      <>
        <View className="corn-f corn-ac corn-jc corn-timer-day" data-testid={type} >
          {value}天
        </View>
      </>
    )
  }

  if (last) {
    return (
      <View className="corn-timer-item corn-f corn-ac corn-jc" data-testid={type} >
        {value}
      </View>
    )
  }

  return (
    <>
      <View className="corn-timer-item corn-f corn-ac corn-jc" data-testid={type} >
        {value}
      </View>
      <View className="corn-timer-symbol">:</View>
    </>
  )
}
