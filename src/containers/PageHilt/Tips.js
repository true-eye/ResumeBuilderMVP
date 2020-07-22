import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import './Tips.scss'

/**
 * @page
 * @route /resume/tips/hilt
 *
 * 1. load resume info from redux
 * 2. preview resume with highlighting skills part
 *
 * @version 0.0.1
 */

const PageHiltTips = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {
    history.push('/resume/section/hilt')
  }

  return (
    <Container className='tips-hilt'>
      <Row>
        <Col md={8} className='col-body-left'>
          <h1 className='page-title'>
            Next, let’s take care of your <span className='font-weight-normal'>skills</span>
          </h1>
          <ul className='tips'>
            <li>Here’s what you need to know:</li>
            <li>Employers scan skills for relevant keywords.</li>
            <li>We’ll help you choose the best ones.</li>
          </ul>
        </Col>
        <Col md={4}>
          <ResumeThumbnail className='tips-hilt-resume-thumbnail' highlight='hilt' info={info} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/educ')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageHiltTips
