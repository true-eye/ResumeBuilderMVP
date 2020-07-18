import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { useHistory, useLocation, Link } from 'react-router-dom'
import classnames from 'classnames'
import './index.scss'

const Header = () => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const completedUntil = useSelector(state => state.resume.completedUntil)

  const steps = [
    { index: 0, id: 'CNTC', label: 'Heading', href: 'section/cntc', paths: ['section/cntc'] },
    {
      index: 1,
      id: 'EXPR',
      label: 'Work History',
      href: 'section/expr',
      paths: ['tips/expr', 'section/expr'],
    },
    {
      index: 2,
      id: 'EDUC',
      label: 'Education',
      href: 'section/educ',
      paths: ['tips/educ', 'section/educ-det', 'section/educ'],
    },
    {
      index: 3,
      id: 'HILT',
      label: 'Skills',
      href: 'section/hilt',
      paths: ['tips/hilt', 'section/hilt'],
    },
    {
      index: 4,
      id: 'SUMM',
      label: 'Summary',
      href: 'section/summ',
      paths: ['tips/summ', 'section/summ'],
    },
    { index: 5, id: 'FNLZ', label: 'Finalize', href: 'section/fnlz', paths: [] },
  ]

  const foundIndex = steps.findIndex(
    step => step.paths.findIndex(path => `/resume/${path}` === location.pathname) >= 0,
  )

  const currentIndex = foundIndex < 0 ? 5 : foundIndex

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
              {steps.map((step, index) => {
                const { id, label, href } = step

                const stepClass = classnames('step', {
                  active: index === currentIndex,
                  'step-completed': index <= completedUntil,
                  'cursor-default': index <= completedUntil,
                })

                return (
                  <Link key={id} to={`/resume/${href}`} className={stepClass}>
                    <span className='step-text' id={id} role='progressbar'>
                      {label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
