import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { Text, View } from '@tarojs/components'
import Image from '../Image'
import Link from '../Link'
import type { TabItemPorps } from './index'

export const Item: React.FC<TabItemPorps> = ({ icon, active, title, onClick, message, url }) => {

  const _class = useMemo(() => ClassNames(
    'xrk-tab-item __x-st-exp __x-st-click',
    active && 'xrk-tab-item-active'
  ), [ active ])

  const content = (
    <Text className={message ? 'xrk-tab-item-message' : ''}>
      {icon ? <Image src={icon} className="xrk-tab-item-icon" imgProps={{ alt: title }} /> : title}
    </Text>
  )

  if (url) {
    return (
      <Link to={url} className={_class} onClick={onClick} data-testid="tab-item" >{content}</Link>
    )
  }

  return (
    <View className={_class} onClick={onClick} data-testid="tab-item" >{content}</View>
  )
}
