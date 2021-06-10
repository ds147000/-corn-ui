/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 12:03:34
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 10:29:46
 */
import { showToast } from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'

const Card: React.FC = () => {
  const onClick = () => {
    showToast({ title: '123' })
  }

  return (
    <View onClick={onClick}>
      <Text>卡片</Text>
    </View>
  )
}

export default Card
