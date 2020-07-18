import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form } from 'react-bootstrap'
import { ZInput } from 'components/themes.js'

/**
 * @form
 * @route /resume/section/expr
 * @subpage AddEditPage
 * @params {object} formik
 * @version 0.0.1
 */

const AboutJobForm = ({ formik }) => {
  return (
    <Form noValidate>
      <Row>
        <Col sm={6} className='col-jobtitle'>
          <ZInput
            formik={formik}
            id='position'
            name='position'
            label='Job Title'
            placeholder='e.g. Customer Service Representative'
          />
        </Col>
        <Col sm={6} className='col-company'>
          <ZInput
            formik={formik}
            id='company'
            name='company'
            label='Employer'
            placeholder='e.g. ACME Technologies'
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} className='col-city'>
          <ZInput
            formik={formik}
            id='jobcity'
            name='jobcity'
            label='City'
            placeholder='e.g. San Francisco'
          />
        </Col>
        <Col sm={6} className='col-city'>
          <ZInput
            formik={formik}
            id='jobstate'
            name='jobstate'
            label='State'
            placeholder='e.g. CA'
          />
        </Col>
      </Row>
    </Form>
  )
}

AboutJobForm.propTypes = {
  formik: PropTypes.object,
}

export default AboutJobForm
