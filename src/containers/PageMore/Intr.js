import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { saveStepAction } from 'actions/resume'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ZButton, ZButtonGroupFooter, ZArrayInterests } from 'components/themes.js'
import { GetNextSection, GetPrevSection } from 'utils/constants/index'

/**
 * @page
 * @route /resume/section/intr
 * @subpage Interests Page
 *
 *
 * @version 0.0.1
 */

const schema = yup.object({
  skills: yup.array().of(yup.string().required('Please type here or remove')),
})

const PageIntr = () => {
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      skills: info.fnlz.intr,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      const current = 'intr'
      const nextTag = GetNextSection(info.more, current)
      dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: [...values.skills] }))
      history.push(`/resume/section/${nextTag}`)
    },
  })

  const onBack = () => {
    const current = 'intr'
    const prevTag = GetPrevSection(info.more, current)
    dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: [...formik.values.skills] }))
    if (prevTag === 'add-section') history.push(`/resume/add-section`)
    else history.push(`/resume/section/${prevTag}`)
  }

  const onNext = e => {
    formik.handleSubmit()
  }

  return (
    <Container className='section-intr'>
      <Row className='page-title-wrap'>
        <Col xs={12} className='col-page-title'>
          <h1 className='page-title'>What interests do you have?</h1>
          <p className='sub-title'></p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: '6', order: 1 }} xs={{ span: 12, order: 2 }}>
          <Form noValidate>
            <ZArrayInterests formik={formik} field='skills' />
          </Form>
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          SAVE & NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

PageIntr.propTypes = {}

export default PageIntr
