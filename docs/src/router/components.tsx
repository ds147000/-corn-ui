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
    title: '动作面板 ActionSheet',
    type: '反馈',
    sort: 2,
  },
  {
    path: '/Button',
    component: require('../views/Button').default,
    title: '按钮 Button',
    type: '通用',
    sort: 2,
  },
  {
    path: '/Drawer',
    component: require('../views/Drawer').default,
    title: '抽屉 Drawer',
    type: '反馈',
    sort: 3,
  },
  {
    path: '/Icon',
    component: require('../views/Icon').default,
    title: '图标 Icon',
    type: '通用',
    sort: 1,
  },
  {
    path: '/Modal',
    component: require('../views/Modal').default,
    title: '模态对话框  Modal',
    type: '反馈',
    sort: 1,
  },
  {
    path: '/Toast',
    component: require('../views/Toast').default,
    title: '轻提示 Toast',
    type: '反馈',
    sort: 4,
  },
]

export default Routes
