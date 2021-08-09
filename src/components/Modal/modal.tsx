import React from 'react'
import { View } from '@tarojs/components'
import Drawer, { DrawerProps } from '../Drawer'

const MULTI_NUM = 3

export type ModalButton = {
  /** 按钮文字 */
  text: string | React.ReactNode
  /** 按钮风格, 默认 success */
  style?: 'cancel' | 'success'
  /** 按钮点击事件 */
  onClick?(): void
}

export interface ModalProps extends DrawerProps {
  /** 提示的标题 */
  title?: string | React.ReactNode
  /** 提示的内容 */
  content?: string | React.ReactNode
  /** 弹出按钮列表 */
  button: Array<ModalButton>
  /** 点击按钮事件 */
  onButtonClick?(index: number): void
}

const Modal: React.FC<ModalProps> = ({
  children,
  content,
  title,
  button,
  onButtonClick,
  ...props
}) => {
  const _centent = children || content
  const floorClass = button.length >= MULTI_NUM ? 'xrk-modal-floor-multi' : 'xrk-modal-floor-line'

  return (
    <Drawer
      {...props}
      position="center"
    >
      <View className="xrk-modal" data-testid="modal" >
        <View className="xrk-modal-top">
          <View className="xrk-modal-title">
            {title}
          </View>
          {Boolean(_centent) && (
            <View className="xrk-modal-content">
              {_centent}
            </View>
          )}

        </View>
        {/* 按钮 */}
        <View className={floorClass}>
          {button.map((item, key) => (
            <View
              className={`xrk-modal-button ${item.style}`}
              key={String(key)}
              onClick={(): void => {
                onButtonClick?.(key)
                item.onClick?.()
              }}
            >
              {item.text}
            </View>
          ))}
        </View>
      </View>
    </Drawer>
  )
}

export default Modal
