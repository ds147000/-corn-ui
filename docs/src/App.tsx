import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import CompsRoutes from './router/components'
import OtherRoutes from './router/other'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {CompsRoutes.map((item) => <Route {...item} key={item.path as string} />)}
          {OtherRoutes.map((item) => <Route {...item} key={item.path as string} />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
