import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { saveStepAction } from 'actions/resume'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  ZButton,
  ZButtonGroupFooter,
  ZArrayCertifications,
  ZExamplesWrapper,
} from 'components/themes.js'
import {
  GetNextSection,
  GetPrevSection,
  JobTitlesArray,
  Certifications,
} from 'utils/constants/index'
import './Cert.scss'

/**
 * @page
 * @route /resume/section/cert
 * @subpage Certifications Page
 *
 *
 * @version 0.0.1
 */

const schema = yup.object({
  skills: yup
    .array()
    .of(yup.object({ title: yup.string().required('Please type here or remove') })),
})

const PageCert = () => {
  const [search, setSearch] = useState('')
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      skills: info.fnlz.cert,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      const current = 'cert'
      const nextTag = GetNextSection(info.more, current)
      dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: [...values.skills] }))
      history.push(`/resume/section/${nextTag}`)
    },
  })

  const onBack = () => {
    const current = 'cert'
    const prevTag = GetPrevSection(info.more, current)
    dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: [...formik.values.skills] }))
    if (prevTag === 'add-section') history.push(`/resume/add-section`)
    else history.push(`/resume/section/${prevTag}`)
  }

  const onNext = e => {
    formik.handleSubmit()
  }

  const onSelectExample = UID => {
    const list = formik.values ? formik.values.skills : []
    const lastItem = list.length >= 0 ? list[list.length - 1] : {}

    if (!list.length || lastItem.title.length) {
      formik.setValues({ skills: [...list, { date: undefined, title: Certifications[UID].text }] })
    } else {
      formik.setValues({
        skills: [
          ...list.slice(0, list.length - 1),
          { ...lastItem, title: Certifications[UID].text },
        ],
      })
    }
  }

  return (
    <Container className='section-cert'>
      <Row className='page-title-wrap'>
        <Col xs={12} className='col-page-title'>
          <h1 className='page-title'>What certifications do you have?</h1>
          <p className='sub-title'></p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
          <Form noValidate>
            <ZArrayCertifications formik={formik} field='skills' />
          </Form>
        </Col>
        <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
          <ZExamplesWrapper
            search={search}
            searchFor='Software Engineer'
            searchPlaceholder='Ex: Cashier'
            setSearch={setSearch}
            searchList={JobTitlesArray}
            examples={Certifications}
            onSelectExample={onSelectExample}
          />
        </Col>
      </Row>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          SAVE & NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

PageCert.propTypes = {}

export default PageCert
