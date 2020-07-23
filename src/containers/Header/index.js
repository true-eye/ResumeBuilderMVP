import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import classnames from 'classnames'
import './index.scss'

/**
 * @header
 *
 * 1. load completed from redux
 * 2. colorize the completed
 * 3. find the current step using the location.pathname
 * 4. active the current step
 *
 * @todo
 * 1. step navigation with clicking
 *
 * @version 0.0.1
 */

const Header = () => {
  const location = useLocation()

  const completed = useSelector(state => state.resume.completed)

  const steps = [
    { index: 0, id: 'cntc', label: 'Heading', href: 'section/cntc', paths: ['section/cntc'] },
    {
      index: 1,
      id: 'expr',
      label: 'Work History',
      href: 'section/expr',
      paths: ['tips/expr', 'section/expr'],
    },
    {
      index: 2,
      id: 'educ',
      label: 'Education',
      href: 'section/educ',
      paths: ['tips/educ', 'section/educ-det', 'section/educ'],
    },
    {
      index: 3,
      id: 'hilt',
      label: 'Skills',
      href: 'section/hilt',
      paths: ['tips/hilt', 'section/hilt'],
    },
    {
      index: 4,
      id: 'summ',
      label: 'Summary',
      href: 'section/summ',
      paths: ['tips/summ', 'section/summ'],
    },
    { index: 5, id: 'fnlz', label: 'Finalize', href: 'section/fnlz', paths: [] },
  ]

  const foundIndex =
    location.pathname === '/'
      ? 0
      : steps.findIndex(
          step => step.paths.findIndex(path => location.pathname.includes(`/resume/${path}`)) >= 0,
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
                  'step-completed': completed[id] === true,
                  'cursor-default': completed[id] === true,
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
