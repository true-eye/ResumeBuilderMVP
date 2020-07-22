import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form } from 'react-bootstrap'
import { ZInput, ZMonthPicker, ZCheckbox, ZSelect, ZAutosuggest } from 'components/themes.js'
import { Degrees, FieldOfStudiesArray } from 'utils/constants/index'

/**
 * @form
 * @route /resume/section/educ-det
 * @params {object} formik
 * @version 0.0.1
 */

const AboutDegreeForm = ({ formik }) => {
  return (
    <Form noValidate>
      <Row>
        <Col sm={6}>
          <ZInput
            formik={formik}
            id='school'
            name='school'
            label='School Name'
            placeholder='e.g. San Jose State'
          />
        </Col>
        <Col sm={6} className='pl-0'>
          <ZInput
            formik={formik}
            id='location'
            name='location'
            label='School Location'
            placeholder='e.g. San Jose'
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <ZSelect
            formik={formik}
            id='degree'
            name='degree'
            label='Degree'
            placeholder='Select'
            options={Degrees.map(deg => ({ label: deg, value: deg }))}
          />
        </Col>
        <Col sm={6} className='pl-0'>
          {formik.values.degree === 'Enter a different degree' && (
            <ZInput
              formik={formik}
              id='cdegree'
              name='cdegree'
              label='Enter a different degree'
              placeholder={`e.g. Bachelor's`}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <ZAutosuggest
            formik={formik}
            id='study'
            name='study'
            label='Field of Study'
            placeholder='e.g. Accountant'
            field='title'
            list={FieldOfStudiesArray}
          />
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={6} className='pl-0'>
              <ZMonthPicker
                id='startDate'
                name='startDate'
                formik={formik}
                label='Graduation Start Date'
              />
            </Col>
            <Col sm={6} className='pl-0'>
              <ZMonthPicker
                id='endDate'
                name='endDate'
                formik={formik}
                label='Graduation End Date'
                disabled={formik.values.currentlyAttending}
              />
            </Col>
            <ZCheckbox
              id='currentlyAttending'
              label='I currently attend here'
              name='currentlyAttending'
              formik={formik}
              onChange={currentlyAttending =>
                currentlyAttending &&
                formik.setValues({ ...formik.values, endDate: undefined, currentlyAttending })
              }
            />
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

AboutDegreeForm.propTypes = {
  formik: PropTypes.object,
}

export default AboutDegreeForm
