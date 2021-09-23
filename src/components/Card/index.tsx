import { View } from '@tarojs/components'
import ClassNames from 'classnames'
import React, { useMemo } from 'react'
import { ViewProps } from '../../types/View'

const Card: React.FC<ViewProps> = ({ className, ...props }) => {
  const _class = useMemo(() =>ClassNames('xrk-card', className), [ className ])

  return (
    <View className={_class} {...props} />
  )
}

export default Card
