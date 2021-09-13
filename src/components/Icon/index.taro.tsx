import React from 'react'
import { Text } from '@tarojs/components'
import classNames from 'classnames'
import { IconProps } from './typing'



const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  return <Text className={classNames(className, `xrk-icon xrk-i-${name}`)} {...props} />
}

export default Icon
