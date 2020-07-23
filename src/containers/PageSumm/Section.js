import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { completeStepAction, saveStepAction } from 'actions/resume'
import TipContainer from 'containers/TipContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditorWrapper from 'containers/EditorWrapper'
import { TipContentSumm } from 'containers/TipContainer/Contents'
import { ZButton, ZButtonGroupFooter, ZRelatedJobTitles } from 'components/themes.js'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Summarizes, JobTitlesArray } from 'utils/constants/index'
import './Section.scss'

/**
 * @page
 * @route /resume/section/summ
 * @subpage Summary Page
 *
 *
 * @version 0.0.1
 */

const PageSummSection = () => {
  const [search, setSearch] = useState('')
  const info = useSelector(state => state.resume.info)
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0)
  const dispatch = useDispatch()
  const history = useHistory()

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(info.summ || '')),
    ),
  )

  const currentContent = editorState.getCurrentContent()
  const rawContentState = convertToRaw(currentContent)
  const markup = draftToHtml(rawContentState)

  const onBack = () => {
    history.push('/resume/tips/summ')
  }

  const onNext = () => {
    dispatch(saveStepAction('summ', markup))
    dispatch(completeStepAction('summ'))
    history.push('/resume/add-section')
  }

  const currentJobTitle = JobTitlesArray.find(job => job.title === search)
  const relatedJobTitles = currentJobTitle ? currentJobTitle.relatedJobTitles : []

  const updatedResume = { ...info, summ: markup }

  return (
    <Container className='section-summ'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>Briefly tell us about your background</h1>
          <p className='sub-title'>
            Get help writing your bullet points with the pre-written examples below.
          </p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={updatedResume}>
            <TipContentSumm />
          </TipContainer>
        </Col>
      </Row>
      <EditorWrapper
        search={search}
        searchFor='Software Developer'
        searchList={JobTitlesArray}
        searchPlaceholder='Ex: Cashier'
        setSearch={setSearch}
        editorState={editorState}
        setEditorState={setEditorState}
        editorPlaceholder='Type your achievements and responsibilities here'
        examples={Summarizes}
        nRecommend={2}
        tooltip='Want to see more pre-written examples? Try searching for another title.'
      />
      <ZRelatedJobTitles
        label='More job titles like Cashier'
        current={currentJobTitleIndex}
        jobTitles={relatedJobTitles}
        onSelect={index => {
          // setSearch('')
          setCurrentJobTitleIndex(index)
        }}
      />
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT: EXTRA SECTIONS
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

PageSummSection.propTypes = {}

export default PageSummSection
