---header
sort: 1
type: 反馈
---
# 模态对话框  Modal
> 从底部弹出的模态框，提供`API`唤起，也支持`JSX方`式使用，也支持提供标题和描述。内置固定的展示样式。也支持插入子节点定制操作板内容。

### 什么时候使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用 `showModal()` 等语法糖方法。




<demo>


<br />
## API
 - `showModal(option: ModalOption): Promise` 通过API唤起模态框。返回一个Promise对象

##### ModalOption
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 是 | 提示的标题 | `string` |  |
| content | 否 | 提示的内容 | `string` |  |
| cancelText | 否 | 取消按钮的文字，最多 4 个字符 | `string` | 取消 |
| confirmText | 否 | 确认按钮的文字，最多 4 个字符 | `string` | 确定 |
| showCancel | 否 | 是否显示取消按钮 | `boolean` | `false` |

##### Result
| 属性 | 说明 | 类型 |
| --- | --- | --- |
| cancel| 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） | `boolean` |
| confirm | 为 true 时，表示用户点击了确定按钮 */ | `boolean` |
| content | 否 | 提示的内容 | `string` `React.ReactNode` |  |
| errMsg | 回调信息 | `string` |

## ModalProps Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| visible | 是 | 是否显示 | `boolean` | `false` |
| title | 否 |  标题 | `string` |  |
| button | 是 | 弹出按钮列表 | `Array<text: string; style: 'cancel' | 'success'; onClick(): void>` | `[]` |
| maskClosable | 否 | 点击蒙层是否允许关闭 | `boolean` | `true` |

# ActionSheet Event
| 事件名称 |  必填 | 说明 | 参数 |
| --- | --- | --- | --- |
| onButtonClick | 否 | 点击弹出按钮事件 | `index: number` 按钮列表索引 |

