/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFont,
  faBars,
  faListOl,
  faUsers,
  faGraduationCap,
  faTrophy,
  faStar,
  faInfoCircle,
  faDesktop,
  faFlag,
  faCertificate,
  faPlus,
  faDownload,
  faSortDown,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import ZResumePreview from 'components/ZResumePreview'
import './Last.scss'

/**
 * @page
 * @route /resume/resume/final
 *
 * 1. load resume info from redux
 * 2. Last step
 *
 * @version 0.0.1
 */

const PageFinalResume = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {}

  console.log(info.more)

  const links = [
    { id: 'cntc', standard: true, name: 'Heading', icon: faFileAlt, link: '/resume/section/cntc' },
    {
      id: 'summ',
      standard: true,
      name: 'Professional Summary',
      icon: faBars,
      link: '/resume/section/summ',
    },
    { id: 'hilt', standard: true, name: 'Skills', icon: faListOl, link: '/resume/section/hilt' },
    {
      id: 'expr',
      standard: true,
      name: 'Work History',
      icon: faUsers,
      link: '/resume/section/expr',
    },
    {
      id: 'educ-det',
      standard: true,
      name: 'Education',
      icon: faGraduationCap,
      link: '/resume/section/educ',
    },
    {
      id: 'accm',
      standard: false,
      name: 'Accomplishments',
      icon: faTrophy,
      link: '/resume/section/accm',
    },
    {
      id: 'afil',
      standard: false,
      name: 'Affiliations',
      icon: faStar,
      link: '/resume/section/afil',
    },
    {
      id: 'addi',
      standard: false,
      name: 'Additional Information',
      icon: faInfoCircle,
      link: '/resume/section/addi',
    },
    {
      id: 'sftr',
      standard: false,
      name: 'Software',
      icon: faDesktop,
      link: '/resume/section/sftr',
    },
    { id: 'lang', standard: false, name: 'Languages', icon: faFlag, link: '/resume/section/lang' },
    {
      id: 'cert',
      standard: false,
      name: 'Certifications',
      icon: faCertificate,
      link: '/resume/section/cert',
    },
    {
      id: 'cust',
      standard: false,
      name: info.more ? info.more.cust : 'Customize',
      icon: faPencilAlt,
      link: '/resume/section/cust',
    },
  ]

  return (
    <Container className='finalize-add-section'>
      <div className='body-resume'>
        <aside className='sidebar'>
          <div className='sidebar-body'>
            <nav className='nav-check-links link-action'>
              <a className='link icon-spell'>
                <FontAwesomeIcon icon={faFont} className='link-icon' />
                Spell Check
              </a>
            </nav>
            <h5 className='sidebar-title'>
              <span>RESUME SECTIONS</span>
              <FontAwesomeIcon icon={faSortDown} className='link-icon icon-angle-down' />
            </h5>
            <nav className='nav-resume-section link-action'>
              {links.map((item, index) =>
                item.standard || info.more[item.id] ? (
                  <a className='link' key={index} onClick={() => history.push(item.link)}>
                    <FontAwesomeIcon icon={item.icon} className='link-icon' />
                    <span className='text'>{item.name}</span>
                  </a>
                ) : (
                  ''
                ),
              )}
              <a
                className='link text-blue list-sepration'
                onClick={() => history.push('/resume/add-section')}
              >
                <FontAwesomeIcon icon={faPlus} />
                Add a section
              </a>
              <a className='link list-sepration'>
                <FontAwesomeIcon icon={faDownload} className='link-icon' /> Download
              </a>
            </nav>
          </div>
        </aside>
        <div className='preview-container'>
          <ZResumePreview info={info} />
        </div>
      </div>
    </Container>
  )
}

export default PageFinalResume
