import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/Card',
    component: require('../views/Card').default,
    title: require('../views/Card/config').default.title,
  },
]

export default Routes
