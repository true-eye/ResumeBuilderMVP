import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

const initialExpr = {
  school: '',
  location: '',
  degree: '',
  study: '',
  startDate: undefined,
  endDate: undefined,
  currentlyAttending: false,
  description: '',
}

const PageEducSectionDet = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)
  const [current, setCurrent] = useState(0) // selected educ index, another means the index of info.educ
  const dispatch = useDispatch()

  const educId = null

  const currentExpr = info.expr && info.expr[current] ? info.expr[current] : null

  const goBackToEducTips = () => {
    history.push('/resume/tips/expr')
  }

  const initialValues = educId || !currentExpr ? initialExpr : currentExpr

  return (
    <AddEditPage
      info={info}
      initialValues={initialValues}
      isEdit={educId !== null}
      current={current}
      onBack={() => {
        if (!info.expr || !info.expr.length) {
          goBackToEducTips()
        } else {
          // setPage(Pages.Summary)
        }
      }}
      onNext={education => {
        if (!educId) {
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
        }
      }}
    />
  )
}

export default PageEducSectionDet
