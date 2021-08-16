---header
sort: 2
type: 状态展示
---
# Swiper 轮播图
> 跨端的轮播图组件，微信端使用的原生轮播图组件，H5基于 Swiper@6.5 实现。其中只可放置 swiper-item 组件，否则会导致未定义的行为。


### 什么时候使用
 - 当有一组平级的内容。
 - 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
 - 常用于一组图片或卡片轮播。



<demo>


## Props
| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| indicatorDots | 否 | 是否显示面板指示点 | `boolean` | `false` |
| indicatorColor | 否 |  指示点颜色 | `string`  | `"rgba(0, 0, 0, .3)"` |
| indicatorActiveColor  | 否  | 当前选中的指示点颜色  | `string`      | `#000` |
| autoplay              | 否  | 是否自动切换        | `boolean`     | `false`              |
| current               | 否  | 当前所在滑块的 index                                         | `number`      | `0` |
| currentItemId         | 否  | 当前所在滑块的 item-id ，不能与 current 被同时指定     | `string`      | |
| interval              | 否  | 自动切换时间间隔     | `number`      | `5000`               |
| duration              | 否  | 滑动动画时长        | `number`      | `500`              |
| circular              | 否  | 是否采用衔接滑动                                             | `boolean`     | `false`  |
| vertical              | 否   | 滑动方向是否为纵向              | `boolean`     | `false`  |
| nextMargin              | 否   | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值              | `string`     | `0px`  |
| displayMultipleItems| 否   | 同时显示的滑块数量                                            | `number`      | 1 |
| skipHiddenItemLayout| 否  | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失 | `boolean` | `false` |
| easingFunction| 否  | 指定 swiper 切换缓动动画类型 | `default``linear``easeInCubic``easeOutCubic``easeInOutCubic` | `default` |
| onChange            | 否  | current 改变时会触发 change 事件   |`BaseEventOrigFunction<onChangeEventDeatil>	` |   |
| onTransition  | 否  | swiper-item 的位置发生改变时会触发 transition 事件 |`BaseEventOrigFunction<onChangeEventDeatil>	` |   |
| onAnimationFinish   | 否   | 动画结束时会触发 animationfinish 事件     | `BaseEventOrigFunction<onChangeEventDeatil>	` |   |
