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
  button?: ModalButton[]
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
  const isButton = Boolean(button?.length)
  const _centent = children || content
  const floorClass = (isButton && (button as ModalButton[]).length >= MULTI_NUM) ?
    'corn-modal-floor-multi' :
    'corn-modal-floor-line'

  return (
    <Drawer
      {...props}
      position="center"
    >
      <View className="corn-modal" data-testid="modal" >
        <View className="corn-modal-top">
          {Boolean(title) && <View className="corn-modal-title">{title}</View>}

          {Boolean(_centent) && (
            <View className="corn-modal-content">
              {_centent}
            </View>
          )}

        </View>
        {/* 按钮 */}
        {isButton && (
          <View className={floorClass}>
            {(button as ModalButton[]).map((item, key) => (
              <View
                className={`corn-modal-button ${item.style}`}
                // eslint-disable-next-line react/no-array-index-key
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
        )}
      </View>
    </Drawer>
  )
}

export default Modal
