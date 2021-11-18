---header
sort: 8
type: 反馈
---
# Tooltip 气泡操作版
> 开箱即用的气泡操作版。常见对话场景、筛选场景。



<demo>

<br />

## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 否 | 气泡出现方向 | `top` `bottom` | `bottom` |
| list | 是 | 气泡选项列表 | `Array<text: string; type: 'active' | 'defualt' >` | `[]` |
| onClick | 否 | 选项列表点击事件 | `(item: Item, index: number): void` | |
| moveX | 否 | 气泡出现X轴偏移 | `number` | 0 |
| moveY | 否 | 气泡出现Y轴偏移 | `number` | 0 |
