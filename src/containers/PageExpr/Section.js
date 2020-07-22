import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { completeStepAction, saveStepAction } from 'actions/resume'
import { AddEditPage, WhatDidYouDoPage, SummaryPage } from './Subpages'
import { v4 as uuidv4 } from 'uuid'
import './Section.scss'

/**
 * @page
 * @route /resume/section/expr
 *
 * 1. load resume info from redux
 * 2. serve subpages
 *
 * @version 0.0.1
 */

export const Pages = {
  AddJob: 'AddJob',
  EditJob: 'EditJob',
  WhatDidYouDo: 'WhatDidYouDo',
  Summary: 'Summary',
}

const initialExpr = {
  position: '',
  company: '',
  jobcity: '',
  jobstate: '',
  startDate: undefined,
  endDate: undefined,
  currentJob: false,
  description: '',
}

const PageExprSection = () => {
  const history = useHistory()
  const info = useSelector(state => state.resume.info)
  const [page, setPage] = useState(info.expr && info.expr.length ? Pages.Summary : Pages.AddJob)
  const [current, setCurrent] = useState(0) // selected job index, another means the index of info.expr
  const dispatch = useDispatch()

  const currentExpr = info.expr && info.expr[current] ? info.expr[current] : null

  const goBackToExprTips = () => {
    history.push('/resume/tips/expr')
  }

  if (page === Pages.AddJob || page === Pages.EditJob) {
    const initialValues = page === Pages.AddJob || !currentExpr ? initialExpr : currentExpr

    return (
      <AddEditPage
        info={info}
        initialValues={initialValues}
        isEdit={page === Pages.EditJob}
        current={current}
        onBack={() => {
          if (!info.expr || !info.expr.length) {
            goBackToExprTips()
          } else {
            setPage(Pages.Summary)
          }
        }}
        onNext={experience => {
          if (page === Pages.AddJob) {
            // add one job to redux expr array
            dispatch(saveStepAction('expr', [...info.expr, { ...experience, id: uuidv4() }]))
            setCurrent(info.expr.length)
          } else if (page === Pages.EditJob) {
            // update the selected job of redux expr array
            dispatch(
              saveStepAction('expr', [
                ...info.expr.slice(0, current),
                { ...info.expr[current], ...experience },
                ...info.expr.slice(current + 1),
              ]),
            )
          }
          setPage(Pages.WhatDidYouDo)
        }}
      />
    )
  }

  if (page === Pages.WhatDidYouDo) {
    return (
      <WhatDidYouDoPage
        info={info}
        current={current}
        initialValue={currentExpr ? currentExpr.description : ''}
        onNext={description => {
          dispatch(
            saveStepAction('expr', [
              ...info.expr.slice(0, current),
              { ...info.expr[current], description },
              ...info.expr.slice(current + 1),
            ]),
          )
          setPage(Pages.Summary)
        }}
        onBack={() => {
          setPage(currentExpr ? Pages.EditJob : Pages.AddJob)
        }}
      />
    )
  }

  return (
    <SummaryPage
      setPage={setPage}
      setCurrent={setCurrent}
      onBack={() => goBackToExprTips()}
      onNext={() => {
        dispatch(completeStepAction('expr'))
        history.push('/resume/tips/educ')
      }}
    />
  )
}

export default PageExprSection
