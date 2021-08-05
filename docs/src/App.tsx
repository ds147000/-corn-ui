import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import CompsRoutes from './router/components'
import OtherRoutes from './router/other'
import Start from './router/start'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {Start.map((item) => <Route {...item} key={item.path as string} />)}
          {CompsRoutes.map((item) => <Route {...item} key={item.path as string} />)}
          {OtherRoutes.map((item) => <Route {...item} key={item.path as string} />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
