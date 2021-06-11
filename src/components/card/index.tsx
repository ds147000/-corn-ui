/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 12:03:34
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-11 14:50:50
 */
import { showActionSheet } from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'

interface CardProps {
  title?: string
  onClick?(): void
}

const Card: React.FC<CardProps> = ({ children, title, onClick }) => {
  const _onClick = (): void => {
    showActionSheet({
      itemList: [ '1', '2', '3' ]
    })
    if (onClick) onClick()
  }

  // #if _APP === 'weapp'
  console.log('我是taro环境')
  // #else
  console.log('我是纯h5环境')
  // #endif

  return (
    <View onClick={_onClick} className='xrkmm-card' >
      <Text>{title}</Text>
      {children}
    </View>
  )
}

export default Card
