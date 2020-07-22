import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { initAction } from 'actions/resume'
import PageHeading from 'containers/PageHeading'
import { PageExprSection, PageExprTips } from 'containers/PageExpr'
import { PageEducTips, PageEducSectionDet, PageEducSection } from 'containers/PageEduc'
import { PageHiltTips, PageHiltSection } from 'containers/PageHilt'
import { PageSummTips, PageSummSection } from 'containers/PageSumm'
import { PageFinalizeAddSection } from 'containers/PageFinalize'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Routes = () => {
  const dispatch = useDispatch()
  return (
    <Router>
      <div className='page-wrap'>
        <Header />
        <Switch>
          <Route path='/resume/section/cntc'>
            <PageHeading />
          </Route>
          <Route path='/resume/tips/expr'>
            <PageExprTips />
          </Route>
          <Route path='/resume/section/expr'>
            <PageExprSection />
          </Route>
          <Route path='/resume/tips/educ'>
            <PageEducTips />
          </Route>
          <Route path='/resume/section/educ-det/:educId'>
            <PageEducSectionDet />
          </Route>
          <Route path='/resume/section/educ-det'>
            <PageEducSectionDet />
          </Route>
          <Route path='/resume/section/educ'>
            <PageEducSection />
          </Route>
          <Route path='/resume/tips/hilt'>
            <PageHiltTips />
          </Route>
          <Route path='/resume/section/hilt'>
            <PageHiltSection />
          </Route>
          <Route path='/resume/tips/summ'>
            <PageSummTips />
          </Route>
          <Route path='/resume/section/summ'>
            <PageSummSection />
          </Route>
          <Route path='/resume/resume/add-section'>
            <PageFinalizeAddSection />
          </Route>
          <Route exact path='/'>
            {() => {
              dispatch(initAction())
              return <PageHeading />
            }}
          </Route>
          <Route render={() => <Redirect to='/resume/section/cntc' />} />
        </Switch>
      </div>

      <Footer />
    </Router>
  )
}

export default Routes
