import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import BtnGroupFooter from 'components/BtnGroupFooter'
import { ZInput, ZButton } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './index.scss'

const schema = yup.object({
  FNAM: yup.string().required('This field is required'),
  LNAM: yup.string().required('This field is required'),
  DCTL: yup.string(),
})

const PageHeading = () => {
  const formik = useFormik({
    initialValues: {
      FNAM: '',
      LNAM: '',
      DCTL: '',
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
              <Col className='col-first-name'>
                <ZInput
                  formik={formik}
                  id='textFNAM'
                  name='FNAM'
                  maxLength='35'
                  label='First Name'
                  placeholder='e.g. John'
                />
              </Col>
              <Col>
                <Form.Group className='col-last-name'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type='text' placeholder='e.g. Smith' maxLength={35} id='textLNAM' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Sr. Accountant'
                  maxLength={100}
                  id='textDCTL'
                />
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='e.g. San Francisco'
                    maxLength={100}
                    id='city'
                  />
                </Form.Group>
              </Col>
              <Col xl={3}>
                <Form.Group>
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='e.g. California or CA'
                    maxLength={50}
                    id='state'
                  />
                </Form.Group>
              </Col>
              <Col xl={3}>
                <Form.Group>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type='text' placeholder='e.g. 94102' maxLength={10} id='zip' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 415-555-5555'
                  maxLength={16}
                  id='textFNAM'
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='e.g. Smith' maxLength={35} id='textLNAM' />
              </Form.Group>
            </Form.Row>
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
