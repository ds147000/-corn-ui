/* eslint-disable import/export */
/* eslint-disable import/first */

import { ViewProps } from '../../types/View'

export type LinkTarget = 'View' | 'Text'

/** 跳转前触发，返回true可以阻止默认跳转行为 */
export type LinkOnBefor = (to: string) => boolean

export type LinkType = 'default' | 'primary' | 'warn' | 'error' | 'link' | 'pop' | 'light'

export interface LinkProps extends ViewProps {
  /** 跳转链接，openmp:// 协议表示跳转指定小程序 */
  to?: string
  /** 链接样式, 默认 normal */
  type?: LinkType
  /** 是否使用替换方式跳转 */
  replace?: boolean
  /** 渲染的标签类型 */
  target?: LinkTarget
  /** 跳转前触发，返回true可以阻止默认跳转行为。注意此方法无法拦截h5端跳转小程序 */
  onBefor?: LinkOnBefor
  /** 跳转微信小程序id，不传默认取context的 */
  appId?: string
  /** 禁用跳转 */
  disabled?: boolean
}

export type LINK = React.FC<LinkProps> & {
  appId: string
  onBefor: LinkOnBefor
}

// #if _APP === 'weapp'
import Link from './index.taro'

export default Link
// #else
import Link from './index.h5'

export default Link
// #endif
