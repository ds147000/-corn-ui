export interface ShowActionSheetOption {
  /** 选项数组，Taro端数组长度最大为 6，H5端不限制 */
  list: string[]
}

export type ShowActionSheet = (option: ShowActionSheetOption) => Promise<Taro.showActionSheet.SuccessCallbackResult>


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

export interface ActionSheetItemProps {
  align?: 'left' | 'center' | 'right'
  text?: string
  suffix?: React.ReactNode | string
  onClick?(): void
}
