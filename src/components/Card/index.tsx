import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import ClassNames from 'classnames'
import React, { useMemo } from 'react'

const Card: React.FC<ViewProps> = ({ className, ...props }) => {
  const _class = useMemo(() =>ClassNames('xrk-card', className), [ className ])

  return (
    <View className={_class} {...props} />
  )
}

export default Card
