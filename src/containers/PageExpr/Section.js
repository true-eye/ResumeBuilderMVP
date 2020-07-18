import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddEditPage } from './Subpages'
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
  Summary: 'AboutYourJob',
}

const PageExprSection = () => {
  const [page, setPage] = useState(Pages.AddJob)
  const history = useHistory()
  const dispatch = useDispatch()
  const info = useSelector(state => state.resume.info)

  if (page === Pages.AddJob) {
    return <AddEditPage />
  }
}

export default PageExprSection
