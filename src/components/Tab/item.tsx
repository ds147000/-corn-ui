import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { View } from '@tarojs/components'
import Image from '../Image'
import Link from '../Link'
import type { TabItemPorps } from './index'

export const Item: React.FC<TabItemPorps> = ({ icon, active, title, onClick, message, url }) => {

  const _class = useMemo(() => ClassNames(
    'xrk-tab-item __x-st-exp __x-st-click',
    active && 'xrk-tab-item-active'
  ), [ active ])

  const content = (
    <View className={message ? 'xrk-tab-item-message' : ''}>
      {icon ? <Image src={icon} className="xrk-tab-item-icon" mode="scaleToFill" imgProps={{ alt: title }} /> : title}
    </View>
  )

  if (url) {
    return (
      <Link to={url} className={_class} onClick={onClick} data-testid="tab-item" target="View" >{content}</Link>
    )
  }

  return (
    <View className={_class} onClick={onClick} data-testid="tab-item" >{content}</View>
  )
}
