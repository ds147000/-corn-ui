---header
sort: 1
type: 表单类型
---
# Cell 单元格
> 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表、表单列表。

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 否 | 标题 | `string ｜ React.ReactNode` |  |
| value | 否 | 内容 | `string ｜ React.ReactNode` |  |
| placeholder | 否 | 内容为空占位提示 | `string ｜ React.ReactNode` |  |
| arrow | 否 | 是否显示箭头 | `boolean` | `false` |
| suffix | 否 | 尾缀内容 | `string ｜ React.ReactNode` | |
| disable | 否 | 禁用 | `boolean` | `false` |
| href | 否 | 跳转链接，填写启用A链接行为。同时会显示箭头 | `string` |  |

## List.Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| line | 否 | 是否显示边框 | `boolean` | `false` |
