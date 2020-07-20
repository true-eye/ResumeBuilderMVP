import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TipContainer from 'containers/TipContainer'
import { TipContentEduc } from 'containers/TipContainer/Contents'
import AboutDegreeForm from './AboutDegreeForm'
import './AddEditPage.scss'

/**
 * @page
 * @route /resume/section/educ
 * @subpage Add or Edit Education
 *
 * @param {object}    info  (resume info)
 * @param {function}  onNext
 * @param {function}  onBack
 * @param {object}    initialValues
 * @param {bool}      isEdit
 * @param {number}    current
 *
 * @version 0.0.1
 */

const schema = yup.object({
  school: yup.string().required(`Please enter your job title.`),
  startDate: yup.date(),
  endDate: yup
    .date()
    .when(['startDate', 'currentlyAttending'], {
      is: (startDate, currentlyAttending) => {
        return !currentlyAttending && !!startDate
      },
      then: yup.date().required('Please enter an End Date.'),
    })
    .when(
      'startDate',
      (startDate, sch) =>
        startDate && sch.min(startDate, `Your end date can't be before the start date.`),
    ),
})

const AddEditPage = ({ info, onNext, onBack, initialValues, isEdit, current }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      onNext(values)
    },
  })

  const onSubmit = e => {
    formik.handleSubmit()
  }

  const isNotBegin = info.educ && info.educ.length

  const pageTitle = isNotBegin ? 'Add Another Degree' : 'Tell us about your education'
  const subTitle = `Include every school, even if you're still there or didn't graduate.`

  const updatedResume = !isEdit
    ? { ...info, educ: [...info.educ, formik.values] }
    : {
        ...info,
        educ: [...info.educ.slice(0, current), formik.values, ...info.educ.slice(current + 1)],
      }

  return (
    <Container className='section-educ-det section-educ-det-addedit'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>{pageTitle}</h1>
          <p className='sub-title'>{subTitle}</p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={updatedResume}>
            <TipContentEduc />
          </TipContainer>
        </Col>
      </Row>
      <AboutDegreeForm formik={formik} />
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onSubmit}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

AddEditPage.propTypes = {
  info: PropTypes.object,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  initialValues: PropTypes.object,
  isEdit: PropTypes.bool,
  current: PropTypes.number,
}

export default AddEditPage
