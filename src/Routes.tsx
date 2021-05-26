import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Layout }  from './components'
const Character = React.lazy(() =>  import('./pages/Character'))
const Characters = React.lazy(() =>  import('./pages/Characters'))

const Routes = () => (
  <HashRouter>
    <Switch>
      <Suspense fallback={<Layout isLoading></Layout>}>
        <Route exact path="/:id" component={Character} />
        <Route exact path="/" component={Characters} />
      </Suspense>
    </Switch>
  </HashRouter>
)

export default Routes
