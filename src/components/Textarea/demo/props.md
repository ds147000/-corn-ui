---header
sort: 3
type: 表单类型
---
# Textarea 多行文本

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 否 | 输入框的初始内容 | `string` |  |
| floor | 否 | 底部内容 | `React.ReactNode` |  |
| placeholder | 否 | 输入框为空时占位符 | `boolean` | |
| disabled | 否 | 禁用 | `boolean` | `false` |
| maxlength | 否 | 最大输入长度，设置为 -1 的时候不限制最大长度 | `number` | 140 |
| autoFocus | 否 |  获取焦点 | `boolean` | `false` |
| onInput | 否 |  当键盘输入时，触发input事件，`event.detail = value, cursor, keyCode`，处理函数可以直接 return 一个字符串，将替换输入框的内容。 | `(event: BaseEventOrigFunction<inputEventDetail>):void` | |
| onFocus | 否 |  输入框聚焦时触发，`event.detail = value, height `，`height` 为键盘高度 | `(event:BaseEventOrigFunction<inputForceEventDetail>):void` | |

## 小程序额外支持的Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| focus | 否 |  获取焦点 | `boolean` | `false` |
| autoHeight | 否 |  是否自动增高，设置 autoHeight 时，style.height不生效 | `boolean` | `false` |
| placeholderStyle | 否 | 指定 placeholder 的样式 | `string` |  |
| placeholderClass | 否 | 指定 placeholder 的样式类 | `string` | `input-placeholder` |
| cursorSpacing | 否 | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | `number` | 0 |
| confirmType | 否 | 设置键盘右下角按钮的文字 | `'send' | 'search' | 'next' | 'go' | 'done'` | `done` |
| confirmHold | 否 | 点击键盘右下角按钮时是否保持键盘不收起 | `boolean` | `false` |
| cursor | 否 | 指定focus时的光标位置 | `number` |  |
| selectionStart | 否 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | `number` | -1 |
| selectionEnd | 否 | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | `number` | -1 |
| adjustPosition | 否 | 键盘弹起时，是否自动上推页面 | `boolean` | `true` |
| holdKeyboard | 否 | focus 时，点击页面的时候不收起键盘 | `boolean` | `false` |
| onConfirm | 否 | 点击完成按钮时触发 | `(data: BaseEventOrigFunction<inputValueEventDetail>): void` |  |
| onKeyboardHeightChange | 否 | 键盘高度发生变化的时候触发此事件 | `(data: BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>): void` |  |
