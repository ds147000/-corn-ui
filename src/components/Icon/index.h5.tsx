import React from 'react'
import classNames from 'classnames'
import { IconProps } from './typing'

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  // eslint-disable-next-line react/forbid-elements, @typescript-eslint/no-explicit-any
  return <i className={classNames(className, `corn-icon corn-i-${name}`)} {...props as any} />
}

export default Icon
