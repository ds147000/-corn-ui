import React from 'react'
import type { TextProps } from '@tarojs/components/types/Text'

// #if _APP === 'weapp'
import { Text } from '@tarojs/components'
// #endif

export interface IconProps extends TextProps {
  name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
  // #if _APP === 'weapp'
  return <Text className={`xrk-icon xrk-i-${name}`} />
  // #else
  return <i className={`xrk-icon xrk-i-${name}`} /> // eslint-disable-line no-unreachable, react/forbid-elements
  // #endif
}

export default Icon
