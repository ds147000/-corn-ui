/*
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-07 11:38:29
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-07 16:08:34
 */
import { transformRem, formatMoney, DateToTimestamp, fixNumber } from './utils'
import { parseUrl, deckUrl, formatImg } from './utils/url'

export { default as Button, ButtonProps } from './components/Button'
export { default as Toast } from './components/Toast'
export { default as Drawer } from './components/Drawer'
export { default as ActionSheet, ActionSheetItem } from './components/ActionSheet'
export { default as showActionSheet } from './components/ActionSheet/api'
export { default as Modal } from './components/Modal'
export { default as showModal } from './components/Modal/api'
export { default as Icon } from './components/Icon/index'
export { default as Empty } from './components/Empty'
export { default as Image } from './components/Image'
export { default as previewImage } from './components/PreviewImage'
export { default as Money } from './components/Money'
export { default as Tab } from './components/Tab'
export { default as Tag } from './components/Tag'
export { default as Affix } from './components/Affix'
export { default as Timer  } from './components/Timer'
export { MinuteSchedulerApp, SecondSchedulerApp, SecondScheduler  } from './components/Timer/SecondScheduler'
export { default as Link } from './components/Link'
export { default as Cell } from './components/Cell'
export { default as Card } from './components/Card'
export { default as Checkbox } from './components/Checkbox/checkbox'
export { default as CheckboxGroup } from './components/Checkbox/group'
export { default as Input } from './components/Input'
export { default as Form } from './components/Form'
export { default as Textarea } from './components/Textarea'
export { default as Skeleton } from './components/Skeleton'

export const UTILS = {
  transformRem,
  parseUrl,
  deckUrl,
  formatImg,
  formatMoney,
  DateToTimestamp,
  fixNumber
}
