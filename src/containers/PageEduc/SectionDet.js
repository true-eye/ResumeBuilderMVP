import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveStepAction } from 'actions/resume'
import { AddEditPage } from './Subpages'
import { v4 as uuidv4 } from 'uuid'
import './SectionDet.scss'

/**
 * @page
 * @route /resume/section/educ-det
 *
 * 1. load resume info from redux
 *
 * @version 0.0.1
 */

const initialEduc = {
  school: '',
  location: '',
  degree: '',
  cdegree: '',
  study: '',
  startDate: undefined,
  endDate: undefined,
  currentlyAttending: false,
  description: '',
}

const PageEducSectionDet = () => {
  const history = useHistory()
  const { educId } = useParams()
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()

  const current = info.educ.findIndex(item => item.id === educId)
  const currentEduc = current >= 0 && info.educ && info.educ[current] ? info.educ[current] : null

  const initialValues = !currentEduc ? initialEduc : currentEduc

  return (
    <AddEditPage
      info={info}
      initialValues={initialValues}
      isEdit={current >= 0}
      current={current}
      onBack={() => {
        if (!info.educ || !info.educ.length) {
          history.push('/resume/tips/educ')
        } else {
          history.push('/resume/section/educ')
        }
      }}
      onNext={education => {
        if (current < 0) {
          // add one education to redux educ array
          dispatch(saveStepAction('educ', [...info.educ, { ...education, id: uuidv4() }]))
          history.push('/resume/section/educ')
        } else {
          // update the selected education of redux educ array
          dispatch(
            saveStepAction('educ', [
              ...info.educ.slice(0, current),
              { ...info.educ[current], ...education },
              ...info.educ.slice(current + 1),
            ]),
          )
          history.push('/resume/section/educ')
        }
      }}
    />
  )
}

export default PageEducSectionDet
