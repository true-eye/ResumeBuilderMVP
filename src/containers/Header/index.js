import React from 'react'
import { Container } from 'react-bootstrap'
import './index.scss'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Container>
          <a className='navbar-brand zty' />

          <div className='header-components-wrap'>
            <ul className='nav'>
              <li className='nav-item '></li>
            </ul>
            <div className='progress-section'>
              <a href='/resume/section/cntc' className='step active cursor-default step-completed'>
                <span className='step-text' id='CNTC' role='progressbar'>
                  Heading
                </span>
              </a>
              <a href='/resume/section/expr' className='step cursor-default step-completed'>
                <span className='step-text' id='EXPR' role='progressbar'>
                  Work History
                </span>
              </a>
              <a className='step'>
                <span className='step-text' id='EDUC' role='progressbar'>
                  Education
                </span>
              </a>
              <a className='step'>
                <span className='step-text' id='HILT' role='progressbar'>
                  Skills
                </span>
              </a>
              <a className='step'>
                <span className='step-text' id='SUMM' role='progressbar'>
                  Summary
                </span>
              </a>
              <a className='step'>
                <span className='step-text' id='FNLZ' role='progressbar'>
                  Finalize
                </span>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
