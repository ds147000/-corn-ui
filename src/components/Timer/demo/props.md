---header
sort: 3
type: 状态展示
---
# Timer 倒计时
> 一个极致的性能优化自动倒计时的组件


### 什么时候使用
 - 需要提供倒计时的场景，比如秒杀、过期卡片


<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| startTime | 是 | 开始时间 | `string` `number` `Date` |  |
| endTime | 是 | 结束时间 | `string` `number` `Date` |  |
| fill | 否 | 是否使用填充风格 | `boolead` | `false` |
| renderItem | 否 | 自定义返回时间项的渲染函数 | `(timeType: string, value: string, last?: boolean): JSX.Element` |  |


## Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onChange | 当剩余时间发现改变 | `index:number` |
