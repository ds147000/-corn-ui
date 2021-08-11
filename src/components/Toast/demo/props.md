---header
sort: 4
type: 反馈
---
# 轻提示 Toast
> 全局展示操作反馈信息组件。通过API唤起更加方便

### 什么时候使用
 - 可提供成功、警告和错误等反馈信息。
 - 居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 微信端特性
 - 使用方式和微信原生一致

### H5端特性
 - 具有栈堆队列显示


<demo>

## API
 - `show(option: Option): void` 唤起taost
 - `hide(): void` 隐藏toast，并清除队列中的toast

## Option 参数说明
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 是 | 提示的内容 | `string` | |
| image | 否 |  自定义图标的本地路径，`image` 的优先级高于 `icon` | `string` | `null` |
| icon | 否 |  图标,可选 `success` `loading` `none` | `string` | `none` |
| mask | 否 |  是否显示透明蒙层，防止触摸穿透 | `boolean` | `false` |
| duration | 否 |  提示的延迟时间,单位 ms | `number` | `2000` |
| success | 否 |  接口调用成功的回调函数 | `() => void` |  |
| fail | 否 |  接口调用失败的回调函数 | `() => void` |  |
