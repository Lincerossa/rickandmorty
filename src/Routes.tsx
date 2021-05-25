import { HashRouter, Route, Switch } from 'react-router-dom'
import Character from './pages/Character'
import Characters from './pages/Characters'
import NotFound from './pages/NotFound'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/:id" component={Character} />
      <Route exact path="/" component={Characters} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
)

export default Routes
