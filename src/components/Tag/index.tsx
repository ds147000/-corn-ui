import React, { useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import ClassNames from 'classnames'
import type { ViewProps } from '../../types/View'

export type TagSize = 'middle' | 'small' | 'mini' | 'large'
export type TagType =  'primary' | 'warn' | 'error' | 'link' | 'pop' | 'defautl' | 'urgent' | 'activity'

export interface TagProps extends ViewProps {
  size?: TagSize
  /** 按钮风格类型 */
  type?: TagType
  /** 镂空风格 */
  ghost?: boolean
}

const Tag: React.FC<TagProps> = ({ size = 'small', type = 'primary', ghost, children, className, ...props }) => {
  const _class = useMemo(() => {
    return ClassNames(
      'xrk-tag xrk-if xrk-ac',
      'xrk-tag-' + size,
      'xrk-tag-' + type,
      ghost && 'xrk-tag-ghost',
      className
    )
  }, [ className, size, type, ghost ])
  if (!children) return null

  return (
    <View className={_class} {...props}>
      <Text>{children}</Text>
    </View>
  )
}

export default Tag
