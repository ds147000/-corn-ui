# 动作面板 ActionSheet
> 从底部弹出的模态框，提供`API`唤起，也支持`JSX方`式使用，也支持提供标题和描述。内置固定的展示样式。也支持插入子节点定制操作板内容。

### 什么时候使用
用户在操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。


<demo>


<br />
## API
 - `showActionSheet(option: Option): Promise` 通过API唤起操作版。返回一个Promise对象。tapIndex 为用户选中索引

##### Option
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| list | 是 | 选项列表,微信端最大为6条。h5不限制 | `string[]` | `[]` |

##### Result
| 属性 | 说明 | 类型 |
| --- | --- | --- |
| tapIndex| 用户选中是索引 | `number` |
| errMsg | 回调信息 | `string` |

## ActionSheet Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| visible | 是 | 是否显示 | `boolean` | `false` |
| showHead | 否 |  是否显示头部 | `boolean` | `true` |
| title | 否 |  标题 | `string` |  |
| subTitle | 否 |  副标题 | `string` |  |
| titleAlign | 否 |  标题水平方向 | `left` `center` `right` | `left` |
| closable | 否 |  是否显示关闭按钮 | `boolean` | `false` |
| showCancel | 否 |  是否显示底部关闭按钮 | `boolean` | `false` |
| showOk | 否 |  是否显示底部确定按钮 | `boolean` | `false` |
| cancelText | 否 |  取消按钮的文案 | `string` `React.ReactNode`| 关闭 |
| okText | 否 |  确定按钮的文案 | `string` `React.ReactNode` | 确定 |
| maskClosable | 否 | 点击蒙层是否允许关闭 | `boolean` | `true` |

# ActionSheet Event
| 事件名称 |  必填 | 说明 | 参数 |
| --- | --- | --- | --- |
| onClose | 否 | 关闭事件或点击取消事件 | null |
| onOk | 否 | 点击确认按钮回调 | null |
| onHide | 否 | 完全隐藏的回调，慎用，只有组件处于隐藏状态都会触发，不管初始化还是什么状态 | null |

## ActionSheetItem Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 是 |  文案 | `string` | 确定 |
| align | 否 |  文字水平方向 | `left` `center` `right` | `left` |
| suffix | 否 |  右边文案 | `string` `React.ReactNode` | |
| onClick | 否 | 点击事件 | null |

