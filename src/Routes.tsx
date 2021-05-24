
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import NotFound from './pages/NotFound'


const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/characters/:id" render={Character} />
      <Route exact path="/characters" render={Characters} />
      <Route exact path="/" render={Home} />
      <Route render={NotFound} />
    </Switch>
  </HashRouter>
)

export default Routes
