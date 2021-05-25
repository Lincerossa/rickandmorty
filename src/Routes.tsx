import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Layout }  from './components'
const Character = React.lazy(() =>  import('./pages/Character'))
const Characters = React.lazy(() =>  import('./pages/Characters'))

const Routes = () => (
  <Suspense fallback={<HashRouter><Layout isLoading>loading</Layout></HashRouter>}>
    <HashRouter>
      <Switch>
        <Route exact path="/:id" component={Character} />
        <Route exact path="/" component={Characters} />
      </Switch>
    </HashRouter>
  </Suspense>
)

export default Routes
