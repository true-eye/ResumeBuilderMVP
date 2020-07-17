import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import ContactForm from './ContactForm'
import ResumeThumbnail from './ResumeThumbnail'
import './index.scss'

const schema = yup.object({
  EMAI: yup
    .string()
    .email('Please use correct format for email address')
    .required('Please enter your email address.'),
})

const PageHeading = () => {
  const formik = useFormik({
    initialValues: {
      FNAM: '',
      LNAM: '',
      DCTL: '',
      CITY: '',
      STAT: '',
      ZIPC: '',
      HPHN: '',
      EMAI: '',
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
    <Container className='section-cntc'>
      <div className='page-title-wrap'>
        <h1 className='page-title'>What’s the best way for employers to contact you?</h1>
        <p className='sub-title'>We suggest including an email and phone number.</p>
      </div>
      <Row>
        <Col md={7} lg={8}>
          <ContactForm formik={formik} />
        </Col>
        <Col md={5} lg={4} className='resume-thumbnail'>
          <ResumeThumbnail data={{ cntc: formik.values }} />
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
