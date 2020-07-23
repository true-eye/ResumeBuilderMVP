import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { saveStepAction } from 'actions/resume'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditorWrapper from 'containers/EditorWrapper'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { JobTitlesArray, Affiliations, GetNextSection, GetPrevSection } from 'utils/constants/index'

/**
 * @page
 * @route /resume/section/afil
 * @subpage Affiliations page
 *
 *
 * @version 0.0.1
 */

const PageAfil = () => {
  const [search, setSearch] = useState('')
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(info.fnlz.afil || '')),
    ),
  )

  const currentContent = editorState.getCurrentContent()
  const rawContentState = convertToRaw(currentContent)
  const markup = draftToHtml(rawContentState)

  const onBack = () => {
    const current = 'afil'
    const prevTag = GetPrevSection(info.more, current)
    dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: markup }))
    if (prevTag === 'add-section') history.push(`/resume/add-section`)
    else history.push(`/resume/section/${prevTag}`)
  }

  const onNext = () => {
    const current = 'afil'
    const nextTag = GetNextSection(info.more, current)
    dispatch(saveStepAction('fnlz', { ...info.fnlz, [current]: markup }))
    history.push(`/resume/section/${nextTag}`)
  }

  return (
    <Container className='section-afil'>
      <Row className='page-title-wrap'>
        <Col xs={12} className='col-page-title'>
          <h1 className='page-title'>What are your affiliations?</h1>
          <p className='sub-title'></p>
        </Col>
      </Row>
      <EditorWrapper
        search={search}
        searchFor='affiliations'
        searchList={JobTitlesArray}
        searchPlaceholder='Ex: Cashier'
        setSearch={setSearch}
        editorState={editorState}
        setEditorState={setEditorState}
        editorPlaceholder='Add your affiliations here.'
        examples={Affiliations}
      />
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

PageAfil.propTypes = {}

export default PageAfil
