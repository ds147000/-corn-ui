---header
sort: 3
type: 状态展示
---
# Money 金额展示器
金额展示


### 什么时候使用
 - 需要将千分位金额转换为元金额时候


<demo>

## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 否 | 金额类型，`glod` 葵花籽，`coin` 积分, `rmb` 人民币 | | `rmb`  |
| size | 否 | 风格大小 | `large``middle``small` | `middle` |
| amountString | 否 | 已经自处理过的金额，可以使用[formatMoney](/utils)方法自处理数值 | `rmb` |  |
| lineThrough | 否 | 是否高亮 | `boolean` | `false` |
