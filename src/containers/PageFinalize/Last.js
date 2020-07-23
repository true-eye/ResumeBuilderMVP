import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

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

  return <Container className='finalize-add-section'>Final Resume</Container>
}

export default PageFinalResume
