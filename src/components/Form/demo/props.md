---header
sort: 1
type: 表单类型
---
# Form 表单
>

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| defaultValue | 否 | 默认表单值 | `string` |  |

## 实例API
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getValue | 获取当前表单值 | null | `Promise(key: value)` |
| setValue | 设置当前表单值 | `key: value` | `void` |
| submit | 手动触发`onSubmit`方法 | null | `void` |
| reset | 手动重置所有表单值 | null | `void` |



# Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onSubmit | 用户点击提交事件,返回表单数据 | `data:Record<string, unknown>` |
| onReset | 重置事件,返回表单数据 | `data:Record<string, unknown>` |

