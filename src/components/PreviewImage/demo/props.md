---header
sort: 6
type: 反馈
---
# previewImage 预览图片
> 预览图片API、支持小程序、H5、非微信浏览器端使用。

### 什么时候使用
用户需要全平预览图片时候


<demo>



## API
 - `previewImage(option: PreviewImageOption): Promise` 通过API唤起模态框。返回一个Promise对象

##### ModalOption
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| current | 否 | 当前显示图片的链接 | `string` |  |
| urls | 是 | 预览的图片数组 | `string[]` |  |


##### Result
| 属性 | 说明 | 类型 |
| --- | --- | --- |
| errMsg | 回调信息 | `string` |
