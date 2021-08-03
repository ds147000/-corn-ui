import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import Routes from './router'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {Routes.map((item) => <Route {...item} key={item.path as string} />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
