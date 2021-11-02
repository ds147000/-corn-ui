import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string
  type: string
  sort: number
}

const Routes: RoutesProps[] = [
  {
    path: '/phone/ActionSheet/demo/basis',
    component: require('../views/ActionSheet/demo/basis').default,
    title: 'API方式调用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/ActionSheet/demo/button',
    component: require('../views/ActionSheet/demo/button').default,
    title: '底部的操作按钮',
    type: 'undefined',
    sort: 7,
  },
  {
    path: '/phone/ActionSheet/demo/buttonText',
    component: require('../views/ActionSheet/demo/buttonText').default,
    title: '自定义底部的操作按钮的内容',
    type: 'undefined',
    sort: 8,
  },
  {
    path: '/phone/ActionSheet/demo/close',
    component: require('../views/ActionSheet/demo/close').default,
    title: '开启关闭按钮',
    type: 'undefined',
    sort: 6,
  },
  {
    path: '/phone/ActionSheet/demo/item',
    component: require('../views/ActionSheet/demo/item').default,
    title: 'ActionSheetItem 一致的样式',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/ActionSheet/demo/mask',
    component: require('../views/ActionSheet/demo/mask').default,
    title: '遮罩层不可操作',
    type: 'undefined',
    sort: 9,
  },
  {
    path: '/phone/ActionSheet/demo/title',
    component: require('../views/ActionSheet/demo/title').default,
    title: '标题和副标题',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/ActionSheet/demo/titleAlign',
    component: require('../views/ActionSheet/demo/titleAlign').default,
    title: '标题的方向',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/ActionSheet/demo/visible',
    component: require('../views/ActionSheet/demo/visible').default,
    title: 'JSX 方式使用',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Affix/demo/position',
    component: require('../views/Affix/demo/position').default,
    title: '设置固定方向',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Affix/demo/top',
    component: require('../views/Affix/demo/top').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Button/demo/block',
    component: require('../views/Button/demo/block').default,
    title: '将按钮宽度调整为其父宽度',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Button/demo/click',
    component: require('../views/Button/demo/click').default,
    title: 'Click 和 disabled',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Button/demo/ghost',
    component: require('../views/Button/demo/ghost').default,
    title: 'ghost',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Button/demo/href',
    component: require('../views/Button/demo/href').default,
    title: '配置跳转链接',
    type: 'undefined',
    sort: 6,
  },
  {
    path: '/phone/Button/demo/icon',
    component: require('../views/Button/demo/icon').default,
    title: 'icon',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Button/demo/size',
    component: require('../views/Button/demo/size').default,
    title: '多达6种的按钮大小',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Button/demo/type',
    component: require('../views/Button/demo/type').default,
    title: '7种状态',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Card/demo/basis',
    component: require('../views/Card/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Cell/demo/basis',
    component: require('../views/Cell/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Cell/demo/click',
    component: require('../views/Cell/demo/click').default,
    title: '事件和禁用',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Cell/demo/list',
    component: require('../views/Cell/demo/list').default,
    title: '单元列表 Cell.List',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Cell/demo/suffix',
    component: require('../views/Cell/demo/suffix').default,
    title: 'suffix',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Checkbox/demo/api',
    component: require('../views/Checkbox/demo/api').default,
    title: '使用 API',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Checkbox/demo/basis',
    component: require('../views/Checkbox/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Checkbox/demo/button',
    component: require('../views/Checkbox/demo/button').default,
    title: '默认状态和自控制状态',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Checkbox/demo/group',
    component: require('../views/Checkbox/demo/group').default,
    title: 'checkBox组',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Checkbox/demo/radio',
    component: require('../views/Checkbox/demo/radio').default,
    title: '单选模式',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Drawer/demo/mask',
    component: require('../views/Drawer/demo/mask').default,
    title: '隐藏遮罩层',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Drawer/demo/maskClosable',
    component: require('../views/Drawer/demo/maskClosable').default,
    title: '隐藏遮罩层',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Drawer/demo/position',
    component: require('../views/Drawer/demo/position').default,
    title: '5种不同弹出的方式抽屉',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Drawer/demo/visible',
    component: require('../views/Drawer/demo/visible').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Empty/demo/basis',
    component: require('../views/Empty/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Empty/demo/children',
    component: require('../views/Empty/demo/children').default,
    title: '自定义子节点',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Empty/demo/size',
    component: require('../views/Empty/demo/size').default,
    title: '三种大小',
    type: 'undefined',
    sort: 10,
  },
  {
    path: '/phone/Empty/demo/src',
    component: require('../views/Empty/demo/src').default,
    title: '使用其他的缺省图',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Empty/demo/text',
    component: require('../views/Empty/demo/text').default,
    title: '说明文字',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Form/demo/api',
    component: require('../views/Form/demo/api').default,
    title: '使用API',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Form/demo/basis',
    component: require('../views/Form/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Icon/demo/basis',
    component: require('../views/Icon/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Icon/demo/class',
    component: require('../views/Icon/demo/class').default,
    title: '直接使用Class类名',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Image/demo/basis',
    component: require('../views/Image/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Image/demo/lazy',
    component: require('../views/Image/demo/lazy').default,
    title: '懒加载',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Image/demo/mode',
    component: require('../views/Image/demo/mode').default,
    title: '不同的缩放模式',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Image/demo/oss',
    component: require('../views/Image/demo/oss').default,
    title: '通过oss裁剪图片体积',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Image/demo/previewImage',
    component: require('../views/Image/demo/previewImage').default,
    title: '开启图片预览',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Input/demo/basis',
    component: require('../views/Input/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Input/demo/other',
    component: require('../views/Input/demo/other').default,
    title: '配合Form表单使用',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Link/demo/basis',
    component: require('../views/Link/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Link/demo/onBefor',
    component: require('../views/Link/demo/onBefor').default,
    title: '监听或者跳转',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Link/demo/replace',
    component: require('../views/Link/demo/replace').default,
    title: '替换跳转',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Link/demo/target',
    component: require('../views/Link/demo/target').default,
    title: '指定Link渲染的标签类型',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Modal/demo/api',
    component: require('../views/Modal/demo/api').default,
    title: 'API 方式调用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Modal/demo/basis',
    component: require('../views/Modal/demo/basis').default,
    title: 'jsx方式使用',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Modal/demo/buttonClick',
    component: require('../views/Modal/demo/buttonClick').default,
    title: '直接使用 button 的 click 事件',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Modal/demo/children',
    component: require('../views/Modal/demo/children').default,
    title: '直接使用子节点定义内容',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Modal/demo/multi',
    component: require('../views/Modal/demo/multi').default,
    title: '多个按钮弹的模态框',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Money/demo/basis',
    component: require('../views/Money/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Money/demo/size',
    component: require('../views/Money/demo/size').default,
    title: '不同的大小风格',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/PreviewImage/demo/basis',
    component: require('../views/PreviewImage/demo/basis').default,
    title: '代码实例',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Search/demo/basis',
    component: require('../views/Search/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Skeleton/demo/basis',
    component: require('../views/Skeleton/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Tab/demo/basis',
    component: require('../views/Tab/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Tab/demo/icon',
    component: require('../views/Tab/demo/icon').default,
    title: '使用图标',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Tab/demo/message',
    component: require('../views/Tab/demo/message').default,
    title: '开启消息红点',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Tab/demo/url',
    component: require('../views/Tab/demo/url').default,
    title: '使用url属性直接跳转',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Tag/demo/ghost',
    component: require('../views/Tag/demo/ghost').default,
    title: '镂空风格',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Tag/demo/size',
    component: require('../views/Tag/demo/size').default,
    title: '两种大小',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Tag/demo/type',
    component: require('../views/Tag/demo/type').default,
    title: '5种状态基础使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Textarea/demo/basis',
    component: require('../views/Textarea/demo/basis').default,
    title: '基本使用',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Textarea/demo/floor',
    component: require('../views/Textarea/demo/floor').default,
    title: '插入底部内容',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Timer/demo/basis',
    component: require('../views/Timer/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Timer/demo/fill',
    component: require('../views/Timer/demo/fill').default,
    title: '填充风格样式',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Timer/demo/renderitem',
    component: require('../views/Timer/demo/renderitem').default,
    title: '自定义渲染项',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Timer/demo/string',
    component: require('../views/Timer/demo/string').default,
    title: '使用日期字符串',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Toast/demo/basis',
    component: require('../views/Toast/demo/basis').default,
    title: '代码演示',
    type: 'undefined',
    sort: 1,
  },
  {
    path: '/phone/Toast/demo/icon',
    component: require('../views/Toast/demo/icon').default,
    title: '具有图标的toast',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/Toast/demo/img',
    component: require('../views/Toast/demo/img').default,
    title: '自定义图标的toast',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/Toast/demo/mask',
    component: require('../views/Toast/demo/mask').default,
    title: '不可操作toast',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/Toast/demo/queue',
    component: require('../views/Toast/demo/queue').default,
    title: '通过Options唤起',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/Toast/demo/sucess',
    component: require('../views/Toast/demo/sucess').default,
    title: '通过API关闭taost',
    type: 'undefined',
    sort: 6,
  },
  {
    path: '/phone/utils/demo/dateToTimestamp',
    component: require('../views/utils/demo/dateToTimestamp').default,
    title:
      '`DateToTimestamp(value: Date | number | string ): number` 日期字符串转时间戳',
    type: 'undefined',
    sort: 6,
  },
  {
    path: '/phone/utils/demo/deckUrl',
    component: require('../views/utils/demo/deckUrl').default,
    title:
      '`deckUrl(url: string, params?: object, hash: object): string` 合并链接的Params和hash',
    type: 'undefined',
    sort: 5,
  },
  {
    path: '/phone/utils/demo/fen',
    component: require('../views/utils/demo/fen').default,
    title:
      '`formatMoney(value: number | string, isReverse: boolean): number` 元转分',
    type: 'undefined',
    sort: 3,
  },
  {
    path: '/phone/utils/demo/fixNumber',
    component: require('../views/utils/demo/fixNumber').default,
    title: '`fixNumber(val: number | string, len = 2): string` 补全数字长度',
    type: 'undefined',
    sort: 7,
  },
  {
    path: '/phone/utils/demo/money',
    component: require('../views/utils/demo/money').default,
    title: '`formatMoney(value: number | string): number` 分转元',
    type: 'undefined',
    sort: 2,
  },
  {
    path: '/phone/utils/demo/parseUrl',
    component: require('../views/utils/demo/parseUrl').default,
    title: '`parseUrl(url: string): Object` 解析链接信息',
    type: 'undefined',
    sort: 4,
  },
  {
    path: '/phone/utils/demo/rem',
    component: require('../views/utils/demo/rem').default,
    title: '`transformRem(px: number): string` PX单位转Rem',
    type: 'undefined',
    sort: 1,
  },
]

export default Routes
