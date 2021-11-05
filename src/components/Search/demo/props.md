---header
sort: 5
type: 表单类型
---
# Search 搜索框
> 支持提示语列表滚动、通常用于页面头部

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 否 | 风格类型,`light`为白色背景风格 | `default` `light'` | `default` |
| back | 否 | 启用返回按钮 | `boolean` | `false` |
| suffix | 否 | 尾部插入的节点内容 | `React.ReactNode` | |
| allowClear | 否 | 可以点击清除图标删除内容,是否开启 | `boolean` | `true` |
| openInput | 否 | 是否直接可输入 | `boolean` | `false` |
| placeholder | 否 | 提示占位语, 可以字符串和数组字符串。如果是传入字符串数组将启用滚动提示语动画 | `string` `string[]` | `middle` |
| value | 否 | 搜索表单值,建议不要传，让程序自控制 | `string` |  |

# Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onClick | 点击事件 | `event: ITouchEvent` |
| onChange | 输入发生改变事件 | `value: string` |
| onSearch | 提交搜索事件 | `value: string` |
| onBack | 点击返回事件 | `null` |


