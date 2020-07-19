import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { completeStepAction, saveStepAction } from 'actions/resume'
import { AddEditPage, WhatDidYouDoPage, SummaryPage } from './Subpages'
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

const Pages = {
  AddJob: 'AddJob',
  EditJob: 'EditJob',
  WhatDidYouDo: 'WhatDidYouDo',
  Summary: 'Summary',
}

const PageExprSection = () => {
  const info = useSelector(state => state.resume.info)
  const [page, setPage] = useState(info.expr && info.expr.length ? Pages.Summary : Pages.AddJob)
  const [current, setCurrent] = useState(0) // selected job index, another means the index of info.expr
  const history = useHistory()
  const dispatch = useDispatch()

  if (page === Pages.AddJob || page === Pages.EditJob) {
    return (
      <AddEditPage
        info={info}
        onNext={experience => {
          if (page === Pages.AddJob) {
            // add one job to redux expr array
            dispatch(saveStepAction('expr', [...info.expr, experience]))
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
        onNext={() => {
          console.log('onNext from WhatDidyouDo')
        }}
      />
    )
  }

  return <SummaryPage />
}

export default PageExprSection
