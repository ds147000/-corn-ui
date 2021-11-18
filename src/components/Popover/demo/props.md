---header
sort: 7
type: 反馈
---
# Popover 气泡层
> 点击元素冒出的气泡层。常见对话场景、筛选场景。此组件比较基础，需要手动设置样式等工作。如果你想开箱即用请使用 `tooltip` 组件



<demo>

<br />

## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 是 | 气泡层渲染函数 | `(rect: ElementRect): JSX.Element` |  |

## ElementRect 对象说明
| 属性 | 说明 | 类型 |
| --- | --- | --- |
| width | 气泡触发元素的宽度 | `number` |
| height | 气泡触发元素的高度 | `number` |
| top | 气泡触发元素的距离顶部可视的高度 | `number` |
| left | 气泡触发元素的距离左边可视的高度 | `number` |
| right | 气泡触发元素的距离右边可视的高度 | `number` |
| offsetLeft | 气泡触发元素的距离左边的高度 | `number` |
| offsetTop | 气泡触发元素的距离顶部的高度 | `number` |
