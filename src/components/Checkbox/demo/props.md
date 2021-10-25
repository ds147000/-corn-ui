---header
sort: 4
type: 表单类型
---
# Checkbox 选择框
> 支持单选、多选的选择框

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 否 | 表单键名 | `string` |  |
| type | 否 | 复选框类型 | `button ｜ default` |  |
| defaultChecked | 否 | 默认是否选中 | `boolean` |  |
| check | 否 | 是否选中,如果传入将由外部控制状态，所以必须传入`onChane`事件 | `boolean` | |
| value | 否 | 表单值，仅在 checkGroup 嵌套下生效 | `string` | |
| disabled | 否 | 禁用 | `boolean` | `false` |
| size | 否 | 大小，当类型为Button生效 | `'max' | 'big' | 'large' | 'middle' | 'small' | 'mini'` | `middle` |
| ghost | 否 |  是否开启幽灵样式，仅在button有效 | `boolean` | `false` |
| buttonType | 否 | 按钮风格类型,仅在button有效 | `primary` `warn` `error` `link` `pop` `default` | `primary` |
## CheckBoxGroup.Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 否 | 表单键名 | `string` |  |
| defaultValue | 否 | 默认选中值 | `string[]` |  |
| radio | 否 | 是否开启单选 | `boolean` |  |
| onChange | 否 | 当状态发生改变回调 | `onChange(val:string[]):void` |  |

## CheckBoxGroup.API
| 名称 | 说明 | 参数 |
| --- | --- | --- |
| selectAll | 全选 | null |
| setValue | 设置表单值 | `val: string[]` |
| getValue | 获取表单值 | |
| reset | 重置表单值 | |
