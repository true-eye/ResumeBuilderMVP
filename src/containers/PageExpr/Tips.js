import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import './Tips.scss'

const PageExprTips = () => {
  const history = useHistory()
  return (
    <Container className='tips-expr'>
      <Row>
        <Col md={8} className='col-body-left'>
          <h1 className='page-title'>
            Now, let’s fill out your <span className='font-weight-normal'>work history</span>
          </h1>
          <ul className='tips'>
            <li>Here’s what you need to know:</li>
            <li>Employers scan your resume for six seconds to decide if you’re a match.</li>
            <li>We’ll suggest bullet points that make a great impression.</li>
          </ul>
        </Col>
        <Col md={4}>
          <ResumeThumbnail className='tips-expr-resume-thumbnail' highlight='expr' />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/cntc')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={() => history.push('/resume/section/expr')}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageExprTips
