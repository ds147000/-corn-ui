import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/Publish',
    component: require('../views/Publish').default,
    title: '贡献指南'
  },
  {
    path: '/md',
    component: require('../views/Card').default,
    title: '组件md文件编写规范'
  },
]

export default Routes
