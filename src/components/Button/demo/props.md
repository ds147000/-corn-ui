---header
sort: 2
type: 通用
---
# Button 按钮

> 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
我们提供了五种风格按钮。

 - `primary`： 默认品牌色调的按钮
 - `warn`   ：轻色调风格的按钮
 - `error`  ：醒目的风格按钮
 - `link`   ：链接风格的按钮
 - `pop`    ：提醒消息类型风格的按钮

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 否 | 按钮风格类型 | `primary` `warn` `error` `link` `pop` | `primary` |
| size | 否 |  按钮大小 | `max` `big` `large` `middle` `small` `mini` | `middle` |
| icon | 否 |  按钮的图标 | `React.ReactNode` | `null` |
| block | 否 |  将按钮宽度调整为其父宽度的选项 | `boolean` | `false` |
| ghost | 否 |  镂空风格 | `boolean` | `false` |
| disabled | 否 |  是否禁用 | `boolean` | `false` |


# Event
| 事件名称 | 说明 | 参数 |
| --- | --- | --- |
| onClick | 点击事件 | null |
