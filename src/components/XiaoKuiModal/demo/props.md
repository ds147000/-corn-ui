---header
sort: 0
type: 反馈
---
# XiaoKuiModal 小葵弹窗
> 带有强烈的小葵风格弹窗，h5端可以通过API唤起。

### 什么时候使用
 - 支付成功
 - 引导用户操作行为

### 微信端特性
 - 仅支持JSX方式使用

### H5端特性
 - 支持JSX、API唤起等方式


<demo>

## API
 - `showXiaokuiModal(option: Option): Promise<item, index>` 唤起小葵弹窗

## Option 参数说明
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 是 |  内容 | `React.ReactNode` |  |
| mask | 否 | 是否显示遮罩层 | `boolean` | `true` |
| maskClosable | 否 |  点击蒙层是否允许关闭 | `boolean` | `true` |
| closable | 否 |  是否显示关闭按钮 | `boolean` | `true` |
| type | 否 |  风格 | `'default' | 'notify' | 'upadte' | 'guide' | 'active'` | `default` |
| btn | 否 | 按钮数组 | `Btn[]` |  |

## ActionSheet Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| visible | 是 | 是否显示 | `boolean` | `false` |
| mask | 否 | 是否显示遮罩层 | `boolean` | `true` |
| maskClosable | 否 |  点击蒙层是否允许关闭 | `boolean` | `true` |
| type | 否 |  风格 | `'default' | 'notify' | 'upadte' | 'guide' | 'active'` | `default` |
| onClose | 否 | 关闭事件或点击取消事件 | null |
| onClick | 否 | 点击按钮事件 | `(item, index): void` |
| btn | 否 | 按钮数组 | `Btn[]` |  |

## Btn
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 否 | 按钮风格类型 | `primary` `warn` `error` `link` `pop` `default` `light`| `primary` |
| ghost | 否 |  镂空风格 | `boolean` | `false` |
| text | 否 |  按钮文字 | `string` |  |
