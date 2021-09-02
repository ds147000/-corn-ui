import React from 'react'
import { IconProps } from './typing'

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`xrk-icon xrk-i-${name}`} /> // eslint-disable-line no-unreachable, react/forbid-elements
}

export default Icon
