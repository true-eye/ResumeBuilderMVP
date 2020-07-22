import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { completeStepAction, saveStepAction } from 'actions/resume'
import TipContainer from 'containers/TipContainer'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { TipContentHilt } from 'containers/TipContainer/Contents'
import { ZButton, ZButtonGroupFooter, ZArraySkills } from 'components/themes.js'

/**
 * @page
 * @route /resume/section/hilt
 * @subpage Skills Page
 *
 *
 * shows all skills as a list (addable, deletable, editable, score)
 *
 * @version 0.0.1
 */

const schema = yup.object({})

const PageHiltSection = () => {
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const onBack = () => {
    history.push('/resume/tips/hilt')
  }

  const formik = useFormik({
    initialValues: info.cntc,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log('onSubmit', values)

      // dispatch(completeStepAction('hilt'))
      // history.push('/resume/tips/summ')
    },
  })

  const onNext = e => {
    formik.handleSubmit()
  }
  console.log(info)

  return (
    <Container className='section-hilt'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>What skills do you want to highlight?</h1>
          <p className='sub-title'>
            Get help writing your bullet points with the pre-written examples below.
          </p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={info}>
            <TipContentHilt />
          </TipContainer>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: '6', order: 1 }} xs={{ span: 12, order: 2 }}>
          <Form noValidate>
            <ZArraySkills formik={formik} />
          </Form>
        </Col>
        <Col md={{ span: '6', order: 2 }} xs={{ span: 12, order: 1 }}>
          Examples
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT: SKILLS
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

PageHiltSection.propTypes = {}

export default PageHiltSection
