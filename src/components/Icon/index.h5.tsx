import React from 'react'
import { IconProps } from './typing'

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  // eslint-disable-next-line react/forbid-elements, @typescript-eslint/no-explicit-any
  return <i className={`xrk-icon xrk-i-${name}`} {...props as any} />
}

export default Icon
