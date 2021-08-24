import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/basis/Introduce',
    component: require('../components/introduce').default,
    title: '介绍'
  },
  {
    path: '/basis/Start',
    component: require('../components/start').default,
    title: '快速开始'
  },
  {
    path: '/basis/Customize',
    component: require('../components/customize').default,
    title: '自定义主题和按需引入样式'
  },
]

export default Routes
