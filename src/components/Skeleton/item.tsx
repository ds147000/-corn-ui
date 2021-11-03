/* eslint-disable no-magic-numbers */
import React from 'react'
import { View } from '@tarojs/components'
import { transformRem } from '../../utils'

export interface SkeletonItemProps {
  /** 宽度，自动转换合适750单位。 默认 690 */
  width?: number
  /** 高度，自动转换合适750单位。 默认 46 */
  height?: number
  /** 顶部外边度，自动转换合适750单位。 默认 15 */
  top?: number
  /** 底部外边度，自动转换合适750单位。 默认 15 */
  bottom?: number
  /** 左部外边度，自动转换合适750单位。 默认 30 */
  left?: number
  /** 右部外边度，自动转换合适750单位。 默认 30 */
  right?: number
}

export const SkeletonItem: React.FC<SkeletonItemProps> = ({
  width = 690,
  height = 46,
  top = 15,
  bottom = 15,
  left = 30,
  right = 30
}) => {
  const _width = transformRem(width)
  const _height = transformRem(height)
  const _top = transformRem(top)
  const _left = transformRem(left)
  const _bottom = transformRem(bottom)
  const _right = transformRem(right)
  const _borderRadius = height > 46 ? transformRem(15) : transformRem(8)

  return (
    <View style={{ paddingTop: _top, paddingBottom: _bottom, paddingLeft: _left, paddingRight: _right }} >
      <View className="xrk-skeleton-item" style={{ width: _width, height: _height, borderRadius: _borderRadius }} />
    </View>
  )
}
