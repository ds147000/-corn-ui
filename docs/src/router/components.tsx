import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/Button',
    component: require('../views/Button').default,
    title: require('../views/Button/config').default.title,
  },
  {
    path: '/Toast',
    component: require('../views/Toast').default,
    title: require('../views/Toast/config').default.title,
  },
]

export default Routes
