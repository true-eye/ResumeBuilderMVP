import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TipContainer from 'containers/TipContainer'
import EditorWrapper from 'containers/EditorWrapper'
import { TipContentEduc } from 'containers/TipContainer/Contents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

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

const examples = {
  '02e95cbe-f7e8-e811-8607-281878761e1e': {
    contentItemUID: '02e95cbe-f7e8-e811-8607-281878761e1e',
    text: 'Majored in <span class="ttc_token" style="color:#0000ff">[Subject]</span>',
  },
  'ca8681ac-cd4c-e911-80f4-2818787aff86': {
    contentItemUID: 'ca8681ac-cd4c-e911-80f4-2818787aff86',
    text: 'Elected Captain of <span class="ttc_token" style="color:#0000ff">[Team]</span>',
  },
  'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc': {
    contentItemUID: 'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc',
    text: 'Minored in <span class="ttc_token" style="color:#0000ff">[Subject]</span>',
  },
  'cc3369c7-f010-e811-80c2-0003ffb4c40f': {
    contentItemUID: 'cc3369c7-f010-e811-80c2-0003ffb4c40f',
    text: 'Graduated cum laude',
  },
  '2dbf5b2c-7033-e811-80c2-0003ffb4c521': {
    contentItemUID: '2dbf5b2c-7033-e811-80c2-0003ffb4c521',
    text: 'Graduated summa cum laude',
  },
  '8a87c6c7-d00e-e811-80c2-0003ffb4c24e': {
    contentItemUID: '8a87c6c7-d00e-e811-80c2-0003ffb4c24e',
    text: 'Awarded <span class="ttc_token" style="color:#0000ff">[Award Name]</span>',
  },
  '8a87c6c7-d00e-e811-80c2-0003ffb4c24f': {
    contentItemUID: '8a87c6c7-d00e-e811-80c2-0003ffb4c24f',
    text:
      'Couresork in <span class="ttc_token" style="color:#0000ff">[Subject]</span>, <span class="ttc_token" style="color:#0000ff">[Subject]</span> and <span class="ttc_token" style="color:#0000ff">[Subject]</span>',
  },
}

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
  const [showDesc, setShowDesc] = useState(false)
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(initialValues ? initialValues.description : ''),
      ),
    ),
  )

  const currentContent = editorState.getCurrentContent()
  const rawContentState = convertToRaw(currentContent)
  const markup = draftToHtml(rawContentState)

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      onNext({
        ...values,
        description: markup,
      })
    },
  })

  const onSubmit = e => {
    formik.handleSubmit()
  }

  const isNotBegin = info.educ && info.educ.length

  const pageTitle = isNotBegin ? 'Add Another Degree' : 'Tell us about your education'
  const subTitle = `Include every school, even if you're still there or didn't graduate.`

  const currentEduc = {
    ...formik.values,
    description: markup,
  }

  const updatedResume = !isEdit
    ? { ...info, educ: [...info.educ, currentEduc] }
    : {
        ...info,
        educ: [...info.educ.slice(0, current), currentEduc, ...info.educ.slice(current + 1)],
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
      <Row className='mb-4 mt-4'>
        <Col>
          <ZButton
            variant='link'
            className='btn-toggle pl-0'
            onClick={() => {
              if (showDesc) {
                setEditorState(EditorState.push(editorState, ContentState.createFromText('')))
              }
              setShowDesc(!showDesc)
            }}
          >
            <FontAwesomeIcon icon={showDesc ? faMinus : faPlus} color='#3a96f0' />
            &nbsp; Add a description to this section
          </ZButton>
        </Col>
      </Row>
      {showDesc && (
        <EditorWrapper
          editorState={editorState}
          setEditorState={setEditorState}
          examples={examples}
          nRecommend={0}
        />
      )}
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
