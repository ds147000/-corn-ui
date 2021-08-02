import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((item) => <Route {...item} key={item.path as string} />)}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
