import { StandardProps, CommonEventFunction, FormItemProps } from './common'

export interface InputProps extends StandardProps, FormItemProps {
  /** 输入框的初始内容
   * @supported weapp, h5, rn
   */
  value?: string

  /** input 的类型
   * @default "text"
   * @supported weapp, h5, rn
   * @rn 部分支持
   */
  type?: 'text' | 'number' | 'idcard' | 'digit'

  /** 是否是密码类型
   * @supported weapp, h5, rn
   */
  password?: boolean

  /** 输入框为空时占位符
   * @supported weapp, h5, rn
   */
  placeholder?: string

  /** 指定 placeholder 的样式
   * @supported weapp
   */
  placeholderStyle?: string

  /** 指定 placeholder 的样式类
   * @default "input-placeholder"
   * @supported weapp
   */
  placeholderClass?: string

  /** 是否禁用
   * @supported weapp, h5, rn
   */
  disabled?: boolean

  /** 最大输入长度，设置为 -1 的时候不限制最大长度
   * @default 140
   * @supported weapp, h5, rn
   */
  maxlength?: number

  /** 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @default 0
   * @supported weapp
   */
  cursorSpacing?: number

  /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘
   * @default false
   * @supported weapp
   */
  autoFocus?: boolean

  /** 获取焦点
   * @supported weapp, h5, rn
   */
  focus?: boolean


  /** 设置键盘右下角按钮的文字
   * @default done
   * @supported weapp, rn
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'

  /** 点击键盘右下角按钮时是否保持键盘不收起
   * @default false
   * @supported weapp
   */
  confirmHold?: boolean

  /** 指定focus时的光标位置
   * @supported weapp, rn
   */
  cursor?: number

  /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用
   * @default -1
   * @supported weapp, rn
   */
  selectionStart?: number

  /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用
   * @default -1
   * @supported weapp, rn
   */
  selectionEnd?: number

  /** 键盘弹起时，是否自动上推页面
   * @default false
   * @supported weapp
   */
  adjustPosition?: boolean

  /** focus 时，点击页面的时候不收起键盘
   * @default false
   * @supported weapp
   */
  holdKeyboard?: boolean

  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default false
   * @supported weapp
   */
  alwaysEmbed?: boolean

  /**
   * 当 type 为 number, digit, idcard 数字键盘是否随机排列
   * @default false
   * @supported alipay
   */
  randomNumber?: boolean

  /**
   * 是否为受控组件
   * @default false
   * @supported alipay
   */
  controlled?: boolean

  /** 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。
   * @supported weapp, h5, rn
   */
  onInput?: CommonEventFunction<Input.inputEventDetail>

  /** 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度
   * @supported weapp, h5, rn
   */
  onFocus?: CommonEventFunction<Input.inputForceEventDetail>

  /** 输入框失去焦点时触发
   *
   * event.detail = {value: value}
   * @supported weapp, h5, rn
   */
  onBlur?: CommonEventFunction<Input.inputValueEventDetail>

  /** 点击完成按钮时触发
   *
   * event.detail = {value: value}
   * @supported weapp, rn
   * @h5 借用[Form 组件](form.html)的`onSubmit`事件来替代
   */
  onConfirm?: CommonEventFunction<Input.inputValueEventDetail>

  /** 键盘高度发生变化的时候触发此事件
   *
   * event.detail = {height: height, duration: duration}
   * @supported weapp
   */
  onKeyboardHeightChange?: CommonEventFunction<Input.onKeyboardHeightChangeEventDetail>
  autoComplete?: "off"
}

export declare namespace Input {
  interface inputEventDetail {
    /** 输入值 */
    value: string
    /** 光标位置 */
    cursor: number
    /** 键值 */
    keyCode: number
  }
  interface inputForceEventDetail {
    /** 输入值 */
    value: string
    /** 键盘高度 */
    height: number
  }
  interface inputValueEventDetail {
    /** 输入值 */
    value: string
  }

  interface onKeyboardHeightChangeEventDetail {
    /** 键盘高度 */
    height: number
    /** 持续时间 */
    duration: number
  }
}
