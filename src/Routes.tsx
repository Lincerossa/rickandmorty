
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Layout} from './components'
import {Characters, Character, NotFound} from './pages/'

const CustomRoute = (props:any) => {
  const { Component } = props
  return (
    <Route {...props} render={(props) => <Layout {...props}><Component {...props} /></Layout>} />
  )
}
const Routes = () => (
  <HashRouter>
    <Switch>
      <CustomRoute exact path="/:id" Component={Character} />
      <CustomRoute exact path="/" Component={Characters} />
      <CustomRoute Component={NotFound} />
    </Switch>
  </HashRouter>
)

export default Routes
