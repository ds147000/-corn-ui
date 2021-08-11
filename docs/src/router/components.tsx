import { RouteProps } from 'react-router-dom'

interface RoutesProps extends RouteProps {
  title: string;
}

const Routes: RoutesProps[] = [
  {
    path: '/ActionSheet',
    component: require('../views/ActionSheet').default,
    title: require('../views/ActionSheet/config').default.title,
  },
  {
    path: '/Button',
    component: require('../views/Button').default,
    title: require('../views/Button/config').default.title,
  },
  {
    path: '/Drawer',
    component: require('../views/Drawer').default,
    title: require('../views/Drawer/config').default.title,
  },
  {
    path: '/Icon',
    component: require('../views/Icon').default,
    title: require('../views/Icon/config').default.title,
  },
  {
    path: '/Modal',
    component: require('../views/Modal').default,
    title: require('../views/Modal/config').default.title,
  },
  {
    path: '/Toast',
    component: require('../views/Toast').default,
    title: require('../views/Toast/config').default.title,
  },
]

export default Routes
