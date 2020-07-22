import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import './AddSection.scss'

/**
 * @page
 * @route /resume/resume/add-section
 *
 * 1. load resume info from redux
 * 2. add additional sections to your resume
 *
 * @version 0.0.1
 */

const PageFinalizeAddSection = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {
    // history.push()
  }

  return (
    <Container className='finalize-add-section'>
      <Row className='page-title-wrap'>
        <Col xs={12}>
          <h1 className='page-title'>Add additional sections to your resume</h1>
          <p className='sub-title'></p>
        </Col>
      </Row>
      <Row className='content'>
        <Col md={7} lg={8}>
          <Row>
            <Col md={12} lg={6}>
              checkboxes
            </Col>
            <Col md={8} lg={6} className='custom-sec-wrap'>
              custom section
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={4}>
          <ResumeThumbnail className='finalize-add-section-resume-thumbnail' info={info} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/summ')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageFinalizeAddSection
