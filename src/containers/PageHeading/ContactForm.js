import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form } from 'react-bootstrap'
import { ZInput } from 'components/themes.js'

/**
 * @form
 * @route /resume/section/cntc
 * @params {object} formik
 * @version 0.0.1
 */

const ContactForm = ({ formik }) => {
  return (
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
          <ZInput formik={formik} id='zip' name='ZIPC' label='Zip Code' placeholder='e.g. 94102' />
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
  )
}

ContactForm.propTypes = {
  formik: PropTypes.object,
}

export default ContactForm
