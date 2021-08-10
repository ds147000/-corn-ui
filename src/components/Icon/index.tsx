import React from 'react'
import { Text } from '@tarojs/components'

export interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <Text className={`xrk-icon xrk-i-${name}`} />
}

export default Icon
