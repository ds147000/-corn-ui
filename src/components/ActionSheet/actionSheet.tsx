import { View } from '@tarojs/components'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import Drawer from '../Drawer'
import { ActionSheetProps } from './interface'
import { ActionSheetItem } from './item'

const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  subTitle,
  titleAlign = 'left',
  showHead = true,
  maskClosable = true,
  closable,
  onClose,
  showCancel,
  cancelText = '关闭',
  showOk,
  okText = '确定',
  onOk,
  children,
  ...props
}) => {
  const isShowFloor = showCancel || showOk
  const titleClass = useMemo(() => classNames(
    'xrk-actionsheet-header-center',
    `xrk-actionsheet-${titleAlign}`
  ), [ titleAlign ])


  return (
    <Drawer
      {...props}
      maskClosable={maskClosable}
      onClose={onClose}
      position="bottom" mask
    >
      <View className="xrk-actionsheet">
        {showHead && (
          <View className="xrk-actionsheet-header">
            <View className={titleClass}>
              <View className="title">{title}</View>
              <View className="sub-title">{subTitle}</View>
            </View>
            {closable && (
              <View
                className="xrk-actionsheet-close"
                data-testid="close"
                onClick={onClose}
              />
            )}
          </View>
        )}
        {children}
        {isShowFloor && (
          <View className="xrk-actionsheet-floor">
            {showCancel && (<ActionSheetItem align={titleAlign} text={cancelText} onClick={onClose} />)}
            {showOk && (<ActionSheetItem align={titleAlign} text={okText} onClick={onOk} />)}
          </View>
        )}
      </View>
    </Drawer>
  )
}


export default ActionSheet
