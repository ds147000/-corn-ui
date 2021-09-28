import { View } from '@tarojs/components'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import Drawer from '../Drawer'
import Icon from '../Icon/index.h5'
import { ActionSheetItem } from './item'


export interface ActionSheetProps {
  /** 是否显示 */
  visible: boolean
  /** 标题 */
  title?: string
  /** 副标题 */
  subTitle?: string
  /** 标题水平方向 */
  titleAlign?: 'left' | 'center' | 'right'
  /** 是否显示头部 */
  showHead?: boolean
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 是否显示底部关闭按钮 */
  showCancel?: boolean
  /** 取消按钮的文案 */
  cancelText?: string
  /** 是否显示底部确定按钮 */
  showOk?: boolean
  /** 确定按钮的文案 */
  okText?: string
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 取消或关闭回调 */
  onClose?(): void
  /** 点击确认按钮回调 */
  onOk?(): void
  onHide?(): void
}

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
              {Boolean(title) && <View className="title">{title}</View>}
              {Boolean(subTitle) && <View className="sub-title">{subTitle}</View>}
            </View>
          </View>
        )}
        {closable && (
          <View
            className="xrk-actionsheet-close"
            data-testid="close"
            onClick={onClose}
          >
            <Icon name="delete" />
          </View>
        )}
        <View className="xrk-actionsheet-body">
          {children}
        </View>
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
