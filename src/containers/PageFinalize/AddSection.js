import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ResumeThumbnail from 'containers/ResumeThumbnail'
import { saveStepAction } from 'actions/resume'
import { ZButton, ZButtonGroupFooter, ZCheckbox, ZInput } from 'components/themes.js'
import { GetNextSection } from 'utils/constants'
import './AddSection.scss'

/**
 * @page
 * @route /resume/resume/add-section
 *
 * 1. load resume info from redux
 * 2. add additional sections to your resume
 *
 * @version 0.0.1
 */

const schema = yup.object({})

const fields = [
  { label: 'Accomplishments', name: 'accm' },
  { label: 'Affiliations', name: 'afil' },
  { label: 'Additional Information', name: 'addi' },
  { label: 'Software', name: 'sftr' },
  { label: 'Languages', name: 'lang' },
  { label: 'Certifications', name: 'cert' },
  { label: 'Interests', name: 'intr' },
]

const PageFinalizeAddSection = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const info = useSelector(state => state.resume.info)

  const onNext = () => {
    formik.handleSubmit()
  }

  const formik = useFormik({
    initialValues: info.more,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      dispatch(saveStepAction('more', values))
      const nextTag = GetNextSection(values, '')
      history.push(`/resume/section/${nextTag}`)
    },
  })

  return (
    <Container className='finalize-add-section'>
      <Row className='page-title-wrap'>
        <Col xs={12}>
          <h1 className='page-title'>Add additional sections to your resume</h1>
          <p className='sub-title'></p>
        </Col>
      </Row>
      <Row className='content'>
        <Col md={7} lg={8}>
          <Row>
            <Col md={12} lg={6}>
              {fields.map(field => (
                <ZCheckbox
                  className='row-section'
                  formik={formik}
                  id={field.name}
                  name={field.name}
                  label={field.label}
                  key={field.name}
                />
              ))}
            </Col>
            <Col md={8} lg={6} className='custom-sec-wrap'>
              <ZCheckbox
                formik={formik}
                id='bown'
                name='bown'
                label=''
                onChange={value => {
                  formik.setValues({
                    ...formik.values,
                    cust: value ? formik.values.cust : '',
                    bown: value,
                  })
                }}
              />
              <ZInput
                id='cust'
                name='cust'
                label='Add Your Own'
                placeholder='E.g. Hobbies'
                formik={formik}
                className='custom-sec-textbox'
              />
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={4}>
          <ResumeThumbnail className='finalize-add-section-resume-thumbnail' info={info} />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={() => history.push('/resume/section/summ')}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

export default PageFinalizeAddSection
