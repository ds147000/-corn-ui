export const DEFAULT_DURATION = 2000

export interface ToastOption {
  /** 提示的内容 */
  title: string
  /** 自定义图标的本地路径，image 的优先级高于 icon */
  image?: string
  /** 图标,可选 success, loading, none, 默认为 none */
  icon?: 'success' | 'loading' | 'none'
  /** 是否显示透明蒙层，防止触摸穿透, 默认 false */
  mask?: boolean
  /** 提示的延迟时间，默认 1500ms */
  duration?: number
  /** 接口调用成功的回调函数 */
  success?(): void
  /** 接口调用失败的回调函数 */
  fail?(): void
}

export interface ToastProps extends ToastOption {
  onClose?(): void
}
