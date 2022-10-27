import React from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { ViewProps } from '../../types/View'
import Icon from '../Icon'

const Alter: React.FC<ViewProps> = ({ children, className, ...props }) => {
  const _class = classNames(className, 'corn-alert', 'corn-f')
  return (
    <View className={_class} {...props} >
      <Icon name="error" className="icon" />
      {children}
    </View>
  )
}

export default Alter
