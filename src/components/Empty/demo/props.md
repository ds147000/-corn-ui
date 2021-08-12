---header
sort: 10
type: 状态展示
---
# 空状态 Empty
> 空状态时的展示占位图。


### 什么时候使用
 - 当目前没有数据时，用于显式的用户提示。
 - 初始化场景时的引导创建流程。


<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| src | 否 | 自定义缺省图片地址 | `string` | `Empty.PRESENTED_IMAGE_DEFAULT` |
| size | 否 |  大小 | `large` `middle` `small`  | `middle` |
| text | 否 |  自定义描述内容	 | `string` |  |
| wrapperTop | 否 |  顶部间距 | `number` | `30px` |
| wrapperBottom | 否 |  底部间距 | `number` | `30px` |


## 内置图片
 - `Empty.PRESENTED_IMAGE_DEFAULT`

 <img src="https://assets.xrkmm.cn/u/4000002499670412/fec0810a-501e-4875-9a7e-0e152681ae21.png" class="img-box" />
<br />

 - `Empty.PRESENTED_IMAGE_SIMPLE`

 <img src="https://assets.xrkmm.cn/u/4000002499670412/1b3b6895-9a51-4e4c-a4fd-b3878dbe987e.png" class="img-box"  />
<br />

 - `Empty.PRESENTED_IMAGE_HAPPY`

 <img src="https://assets.xrkmm.cn/u/4000002499670412/8bc1ba9b-b71d-4b77-bc86-1fd2a2f7b026.png" class="img-box" />
<br />

 - `Empty.PRESENTED_IMAGE_ERROR`

 <img src="https://assets.xrkmm.cn/u/4000002499670412/99bc2c9f-eba2-4295-8de4-3d8f52862cf6.png" class="img-box" />
