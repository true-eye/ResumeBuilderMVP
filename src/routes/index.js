import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { initAction } from 'actions/resume'
import PageHeading from 'containers/PageHeading'
import { PageExprSection, PageExprTips } from 'containers/PageExpr'
import { PageEducTips, PageEducSectionDet, PageEducSection } from 'containers/PageEduc'
import { PageHiltTips, PageHiltSection } from 'containers/PageHilt'
import { PageSummTips, PageSummSection } from 'containers/PageSumm'
import { PageFinalizeAddSection, PageFinalResume } from 'containers/PageFinalize'
import {
  PageAccm,
  PageAfil,
  PageAddi,
  PageSftr,
  PageLang,
  PageCert,
  PageIntr,
  PageCust,
} from 'containers/PageMore'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

const Routes = () => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.resume.info)

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
          <Route path='/resume/add-section'>
            <PageFinalizeAddSection />
          </Route>
          <Route path='/resume/section/final'>
            <PageFinalResume />
          </Route>
          <Route exact path='/'>
            {() => {
              dispatch(initAction())
              return <PageHeading />
            }}
          </Route>
          <Route
            render={({ location }) => {
              const { pathname } = location

              if (pathname.startsWith('/resume/section/')) {
                const suffix = pathname.slice(16) // extract 'accm' or 'accm/'
                const prefix = suffix.split('/')[0] // extract 'accm'

                // when this section is added on /section/add-section, then render, else ignore
                if (info.more[prefix] === true || (info.more[prefix] && info.more[prefix].length)) {
                  switch (prefix) {
                    case 'accm':
                      return <PageAccm />
                    case 'afil':
                      return <PageAfil />
                    case 'addi':
                      return <PageAddi />
                    case 'sftr':
                      return <PageSftr />
                    case 'lang':
                      return <PageLang />
                    case 'cert':
                      return <PageCert />
                    case 'intr':
                      return <PageIntr />
                    case 'cust':
                      return <PageCust />
                    default:
                      break
                  }
                }
              }

              return <Redirect to='/resume/section/cntc' />
            }}
          />
        </Switch>
      </div>

      <Footer />
    </Router>
  )
}

export default Routes
