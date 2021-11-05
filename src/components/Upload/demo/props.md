---header
sort: 6
type: 表单类型
---
# Upload 上传组件
> 支持上传图片预览
> 具有两种布局方式，单行滚动、九宫格排布等
> 可以配合 `Form` 表单一起使用

<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 否 | 表单名称 | `string` |
| itemClassName | 否 | 图片项类名 | `string` | |
| multiple | 否 | 是否开启多选 | `boolean` | `true` |
| count | 否 | 最大文件数 | `number` | 9 |
| layout | 否 | 布局类型 | `row` `square` | `row` |
| list | 否 | 默认已经上传文件对象, `{ mediaId: number, content: string, status: 'loading', 'error', 'done' }` | `Upload.Media[]` |  |
| type | 否 | 文件类型 | `image` `video` `all` | |
| btn | 否 | 自定义按钮渲染,注意使用此属性将需要自己实现选择文件功能 | `React.FC<{ type: string, onChange(file: FileList): void, onMpChange(file: string[]) name: string, multiple: boolean,  }>` | |
｜beforUpload｜ 否| 上传前触发的钩子，返回true终止上传。参数 file:当前选择文件,小程序端返回临时路径 list: 当前已经上传的列表  | `(): boolean` | |
  handelUpload| 否 | 单独设置处理上传方法,小程序端参数是临时路径列表，h5端为FileList对象。通过直接对`Upload.handelUpload`直接设置全局上传组件生效的方法 | `(file: FileList | string[]) :Promise<Upload.Media[]>` | |


