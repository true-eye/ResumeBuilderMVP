import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import AboutJobForm from './AboutJobForm'
import './AddEditPage.scss'

/**
 * @page
 * @route /resume/section/expr
 * @subpage Add or Edit Job
 *
 * @version 0.0.1
 */

const schema = yup.object({
  // EMAI: yup
  //   .string()
  //   .email('Please use correct format for email address')
  //   .required('Please enter your email address.'),
})

const AddEditPage = () => {
  const formik = useFormik({
    initialValues: {
      position: '',
      company: '',
      jobcity: '',
      jobstate: '',
      startDate: undefined,
      endDate: undefined,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log('onSubmit', values)
    },
  })

  const onSubmit = e => {
    formik.handleSubmit()
  }

  return (
    <Container className='section-expr section-expr-addedit'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>Tell us about another job</h1>
          <p className='sub-title'>We’ll put your work history in the right order.</p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          Container Tip
        </Col>
      </Row>
      <AboutJobForm formik={formik} />
      <ZButtonGroupFooter>
        <ZButton variant='default'>Back</ZButton>
        <ZButton variant='primary' onClick={onSubmit}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default AddEditPage
