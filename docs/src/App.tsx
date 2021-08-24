import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout'
import CompsRoutes from './router/components'
import OtherRoutes from './router/other'
import Start from './router/start'
import Demo from './router/demo'
import './app.scss'

const Basis: React.FC = () => {
  return (
    <Layout>
      <Switch>
        {Start.map((item) => <Route {...item} key={item.path as string} />)}
        {OtherRoutes.map((item) => <Route {...item} key={item.path as string} />)}
      </Switch>
    </Layout>
  )
}

const Docs: React.FC = () => {
  return (
    <Layout>
      <Switch>
        {CompsRoutes.map((item) => <Route {...item} key={item.path as string} />)}
      </Switch>
    </Layout>
  )
}

const Phone: React.FC = () => {
  return (
    <div className="phone-page">
      <Switch>
        {Demo.map((item) => <Route {...item} key={item.path as string} />)}
      </Switch>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/basis" component={Basis} />
          <Route path="/doc" component={Docs} />
          <Route path="/phone" component={Phone} />
          <Redirect to="/doc/Introduce" path="/" />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
