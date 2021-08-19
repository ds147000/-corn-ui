import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
  type: string;
  sort: number;
}

const Routes: RoutesProps[] = [
  {
    path: '/ActionSheet',
    component: require('../views/ActionSheet').default,
    title: 'ActionSheet 动作面板',
    type: '反馈',
    sort: 2,
  },
  {
    path: '/Button',
    component: require('../views/Button').default,
    title: 'Button 按钮',
    type: '通用',
    sort: 2,
  },
  {
    path: '/Drawer',
    component: require('../views/Drawer').default,
    title: 'Drawer 抽屉',
    type: '反馈',
    sort: 3,
  },
  {
    path: '/Empty',
    component: require('../views/Empty').default,
    title: 'Empty 空状态',
    type: '状态展示',
    sort: 10,
  },
  {
    path: '/Icon',
    component: require('../views/Icon').default,
    title: 'Icon 图标',
    type: '通用',
    sort: 1,
  },
  {
    path: '/Image',
    component: require('../views/Image').default,
    title: 'Image 图片',
    type: '通用',
    sort: 3,
  },
  {
    path: '/Modal',
    component: require('../views/Modal').default,
    title: 'Modal 模态对话框',
    type: '反馈',
    sort: 1,
  },
  {
    path: '/Money',
    component: require('../views/Money').default,
    title: 'Money 金额展示器',
    type: '状态展示',
    sort: 2,
  },
  {
    path: '/PreviewImage',
    component: require('../views/PreviewImage').default,
    title: 'previewImage 预览图片',
    type: '反馈',
    sort: 6,
  },
  {
    path: '/Swiper',
    component: require('../views/Swiper').default,
    title: 'Swiper 轮播图',
    type: '状态展示',
    sort: 2,
  },
  {
    path: '/Tab',
    component: require('../views/Tab').default,
    title: 'Tab 切换栏',
    type: '状态展示',
    sort: 1,
  },
  {
    path: '/Toast',
    component: require('../views/Toast').default,
    title: 'Toast 轻提示',
    type: '反馈',
    sort: 4,
  },
  {
    path: '/utils',
    component: require('../views/utils').default,
    title: 'UITIS 工具集合',
    type: '工具',
    sort: 4,
  },
]

export default Routes
