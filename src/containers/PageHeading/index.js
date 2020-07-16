import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import BtnGroupFooter from 'components/BtnGroupFooter'
import { ZInput, ZButton } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
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
      console.log('onSubmit')
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
          <Form noValidate>
            <Row className='row-full-name'>
              <Col xs={6} className='col-first-name'>
                <ZInput
                  formik={formik}
                  id='textFNAM'
                  name='FNAM'
                  maxLength={35}
                  label='First Name'
                  placeholder='e.g. John'
                />
              </Col>
              <Col xs={6} className='col-last-name'>
                <ZInput
                  formik={formik}
                  id='textLNAM'
                  name='LNAM'
                  maxLength={35}
                  label='Last name'
                  placeholder='e.g. Smith'
                />
              </Col>
            </Row>
            <Row className='row-profession'>
              <Col className='col-profession'>
                <ZInput
                  formik={formik}
                  id='textDCTL'
                  name='DCTL'
                  label='Profession'
                  placeholder='e.g. Sr. Accountant'
                />
              </Col>
            </Row>

            <Row className='row-city-state-zip'>
              <Col xs={6} className='col-city'>
                <ZInput
                  formik={formik}
                  id='city'
                  name='CITY'
                  label='City'
                  placeholder='e.g. San Francisco'
                />
              </Col>
              <Col xl={3} className='col-state'>
                <ZInput
                  formik={formik}
                  id='state'
                  name='STAT'
                  label='State/Province'
                  placeholder='e.g. California or CA'
                />
              </Col>
              <Col xl={3} className='col-zip'>
                <ZInput
                  formik={formik}
                  id='zip'
                  name='ZIPC'
                  label='Zip Code'
                  placeholder='e.g. 94102'
                />
              </Col>
            </Row>
            <Row className='row-phone-email'>
              <Col xs={6} className='col-phone'>
                <ZInput
                  formik={formik}
                  id='textFNAM'
                  name='HPHN'
                  label='Phone'
                  maxLength={16}
                  type='number'
                  placeholder='e.g. 415-555-5555'
                />
              </Col>
              <Col xs={6} className='col-email'>
                <ZInput
                  formik={formik}
                  id='EMAI'
                  name='EMAI'
                  label='Email Address'
                  maxLength={35}
                  type='email'
                  placeholder='e.g. Smith'
                />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={5} lg={4} className='resume-thumbnail'>
          Resume Thumbnail
        </Col>
      </Row>
      <BtnGroupFooter>
        <ZButton variant='default'>Back</ZButton>
        <ZButton variant='primary' onClick={onSubmit}>
          NEXT: WORK HISTORY
        </ZButton>
      </BtnGroupFooter>
    </Container>
  )
}

export default PageHeading
