import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeStepAction, saveStepAction } from 'actions/resume'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import ContactForm from './ContactForm'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import './index.scss'

/**
 * @page
 * @route /resume/section/cntc
 *
 * 1. load resume info from redux to initialize formik.
 * 2. preview resume with updated cntc value along with resume info from redux
 * 3. email validation with yup
 * 4. update store.resume.info.cntc
 * 5. mark cntc as completed
 *
 * @version 0.0.1
 */

const schema = yup.object({
  EMAI: yup
    .string()
    .email('Please use correct format for email address')
    .required('Please enter your email address.'),
})

const PageHeading = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const info = useSelector(state => state.resume.info)
  const formik = useFormik({
    initialValues: info.cntc,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log('onSubmit', values)

      dispatch(saveStepAction('cntc', values))
      dispatch(completeStepAction('cntc'))

      history.push('/resume/tips/expr')
    },
  })

  const onSubmit = e => {
    formik.handleSubmit()
  }
  console.log(info)

  return (
    <Container className='section-cntc'>
      <div className='page-title-wrap'>
        <h1 className='page-title'>What’s the best way for employers to contact you?</h1>
        <p className='sub-title'>We suggest including an email and phone number.</p>
      </div>
      <Row>
        <Col md={7} lg={8}>
          <ContactForm formik={formik} />
        </Col>
        <Col md={5} lg={4}>
          <ResumeThumbnail info={{ ...info, cntc: formik.values }} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default'>Back</ZButton>
        <ZButton variant='primary' onClick={onSubmit}>
          NEXT: WORK HISTORY
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageHeading
