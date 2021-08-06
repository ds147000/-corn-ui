
export interface ShowActionSheetOption {
  /** 选项数组，Taro端数组长度最大为 6，H5端不限制 */
  list: string[]
  /** 选项文字颜色 */
  color: string
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
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 关闭回调 */
  onClose?(): void
}
