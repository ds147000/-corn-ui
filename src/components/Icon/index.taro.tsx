import React from 'react'
import { Text } from '@tarojs/components'
import { IconProps } from './typing'



const Icon: React.FC<IconProps> = ({ name }) => {
  return <Text className={`xrk-icon xrk-i-${name}`} />
}

export default Icon
