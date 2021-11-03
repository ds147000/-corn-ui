import { View } from '@tarojs/components'
import React from 'react'
import { SkeletonItem, SkeletonItemProps } from './item'

export interface SkeletonProps {
  children: React.ReactElement<SkeletonItemProps>
}

type SkeletonComponents = React.FC & { Item: typeof SkeletonItem }

const Skeleton: SkeletonComponents = ({ children }) => {
  return (
    <View className="xrk-skeleton" >
      {children}
    </View>
  )
}

Skeleton.Item = SkeletonItem

export default Skeleton
