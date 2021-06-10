/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 12:03:34
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 18:49:11
 */
import { showToast } from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'

interface CardProps {
  title?: string
  onClick?(): void
}

const Card: React.FC<CardProps> = ({ children, title, onClick }) => {
  const _onClick = () => {
    showToast({ title: '123' })
    if (onClick) onClick()
  }

  return (
    <View onClick={_onClick} className="xrkmm-card" >
      <Text>{title}</Text>
      {children}
    </View>
  )
}

export default Card
