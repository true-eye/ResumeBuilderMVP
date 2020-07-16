import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import PageHeading from 'containers/PageHeading'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Routes = () => {
  return (
    <Router>
      <div className='page-wrap'>
        <Header />
        <Switch>
          <Route path='/resume/section/cntc'>
            <PageHeading />
          </Route>

          <Route render={() => <Redirect to='/resume/section/cntc' />} />
        </Switch>
      </div>

      <Footer />
    </Router>
  )
}

export default Routes
