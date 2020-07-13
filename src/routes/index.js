import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import PageHeading from 'containers/PageHeading'

const Routes = () => (
  <Router>
    <div
      style={{
        width: '100%',
      }}
    >
      <Switch>
        <Route exact path='/'>
          <PageHeading />
        </Route>

        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  </Router>
)

export default Routes
