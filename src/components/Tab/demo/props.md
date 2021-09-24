---header
sort: 1
type: 状态展示
---
# Tab 切换栏
> 一个菜单切换栏


### 什么时候使用
 - 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。


<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| options | 是 | 选项数组 | `options[]` |  |
| currenIndex | 是 |  当前激活项的索引 | `number` |  |
| type | 否 |  tab切换栏风格 | `button``default` | `default` |

## Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onChange | 选项激活事件 | `index:number` |


## options
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 否 |  标题 | `string` |  |
| icon | 否 |  图标地址 | `string` |  |
| title | 否 |  标题 | `string` |  |
| message | 否 |  是否开启消息红点 | `boolean` | `false` |
