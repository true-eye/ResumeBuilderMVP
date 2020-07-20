import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import './Tips.scss'

/**
 * @page
 * @route /resume/tips/educ
 *
 * 1. load resume info from redux
 * 2. preview resume with highlighting educ part
 *
 * @version 0.0.1
 */

const PageEducTips = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {
    if (info.educ && info.educ.length) {
      history.push('/resume/section/educ')
    } else {
      history.push('/resume/section/educ-det')
    }
  }

  return (
    <Container className='tips-educ'>
      <Row>
        <Col md={8} className='col-body-left'>
          <h1 className='page-title'>
            Great, let’s work on your <span className='font-weight-normal'>education</span>
          </h1>
          <ul className='tips'>
            <li>Here’s what you need to know:</li>
            <li>Employers quickly scan the education section.</li>
            <li>We’ll take care of the formatting so it’s easy to find.</li>
          </ul>
        </Col>
        <Col md={4}>
          <ResumeThumbnail className='tips-educ-resume-thumbnail' highlight='educ' info={info} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/expr')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageEducTips
