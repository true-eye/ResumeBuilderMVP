import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import './Tips.scss'

/**
 * @page
 * @route /resume/tips/summ
 *
 * 1. load resume info from redux
 * 2. preview resume with highlighting summary part
 *
 * @version 0.0.1
 */

const PageSummTips = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {
    history.push('/resume/section/summ')
  }

  return (
    <Container className='tips-summ'>
      <Row>
        <Col md={8} className='col-body-left'>
          <h1 className='page-title'>
            Finally, let’s work on your <span className='font-weight-normal'>summary</span>
          </h1>
          <ul className='tips'>
            <li>Here’s what you need to know:</li>
            <li>Your summary shows employers you’re right for their job.</li>
            <li>We’ll help you write a great one with expert content you can customize.</li>
          </ul>
        </Col>
        <Col md={4}>
          <ResumeThumbnail className='tips-summ-resume-thumbnail' highlight='summ' info={info} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/hilt')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageSummTips
