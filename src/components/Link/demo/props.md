---header
sort: 2
type: 导航
---
# Link 链接
> 跳转指定路由，支持跳转打开小程序。并且可以通过`Link.appId`设置全局唤起小程序`appId`


### 什么时候使用
 - 需要跳转到其他页面或路由时候
 - 需要点击唤起小程序时候
 - 需要路由跳转前需要进行判断时候


<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| to | 是 | 跳转链接，openmp:// 协议表示跳转指定小程序 | `string` |  |
| replace | 否 | 是否使用替换方式跳转 | `string` |  |
| target | 否 | 指定容器渲染的标签类型 | `View` `Text` | `Text` |
| disabled | 否 | 禁用 | `Boolean`  | `false` |
| appId | 否 | 指定当前跳转微信小程序id，不传默认取全局`Link.appId`值 | `string`  | |
| type | 否 | 按钮风格类型 | `primary` `warn` `error` `link` `pop` `default` | `primary` |

## Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onBefor | 跳转前触发，返回`true`可以阻止默认跳转行为。注意此方法无法拦截h5端跳转小程序 | `to:string` |
