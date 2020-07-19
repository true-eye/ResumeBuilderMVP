import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TipContainer from 'containers/TipContainer'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import AboutJobForm from './AboutJobForm'
import './AddEditPage.scss'

/**
 * @page
 * @route /resume/section/expr
 * @subpage Add or Edit Job
 *
 * @param {object}    info  (resume info)
 * @param {function}  onNext
 *
 * @version 0.0.1
 */

const schema = yup.object({
  position: yup.string().required('Please enter your job title.'),
  company: yup.string().required(`Please enter the employer's name.`),
  startDate: yup.date(),
  endDate: yup
    .date()
    .when(['startDate', 'currentJob'], {
      is: (startDate, currentJob) => {
        return !currentJob && !!startDate
      },
      then: yup.date().required('Please enter an End Year.'),
    })
    .when(
      'startDate',
      (startDate, sch) =>
        startDate && sch.min(startDate, `Your end date can't be before the start date.`),
    ),
})

const AddEditPage = ({ info, onNext }) => {
  const formik = useFormik({
    initialValues: {
      position: '',
      company: '',
      jobcity: '',
      jobstate: '',
      startDate: undefined,
      endDate: undefined,
      currentJob: false,
      description: '',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log('onSubmit', values)
      onNext(values)
    },
  })

  const onSubmit = e => {
    formik.handleSubmit()
  }

  const isNotBegin = info.expr && info.expr.length

  const pageTitle = isNotBegin ? 'Tell us about another job' : 'Tell us about your most recent job'
  const subTitle = isNotBegin
    ? 'We’ll put your work history in the right order.'
    : 'We’ll start there and work backward.'

  return (
    <Container className='section-expr section-expr-addedit'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>{pageTitle}</h1>
          <p className='sub-title'>{subTitle}</p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={{ ...info, expr: [...info.expr, formik.values] }}>
            <TipContentExpr />
          </TipContainer>
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

AddEditPage.propTypes = {
  info: PropTypes.object,
  onNext: PropTypes.func,
}

export default AddEditPage
