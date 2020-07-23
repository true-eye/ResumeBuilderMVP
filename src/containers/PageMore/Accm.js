import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { saveStepAction } from 'actions/resume'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditorWrapper from 'containers/EditorWrapper'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { JobTitlesArray, Accomplishments, GetNextSection } from 'utils/constants/index'

/**
 * @page
 * @route /resume/section/accm
 * @subpage Accomplishments page
 *
 *
 * @version 0.0.1
 */

const PageAccm = () => {
  const [search, setSearch] = useState('')
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(info.fnlz.accm || '')),
    ),
  )

  const currentContent = editorState.getCurrentContent()
  const rawContentState = convertToRaw(currentContent)
  const markup = draftToHtml(rawContentState)

  const onBack = () => {
    history.push('/resume/add-section')
  }

  const onNext = () => {
    const nextTag = GetNextSection(info.more, 'accm')
    dispatch(saveStepAction('fnlz', { ...info.fnlz, accm: markup }))
    history.push(`/resume/section/${nextTag}`)
  }

  return (
    <Container className='section-accm'>
      <Row className='page-title-wrap'>
        <Col xs={12} className='col-page-title'>
          <h1 className='page-title'>Tell us about your accomplishments</h1>
          <p className='sub-title'>Use our expert recommendations below to get started.</p>
        </Col>
      </Row>
      <EditorWrapper
        search={search}
        searchFor='accomplishments'
        searchList={JobTitlesArray}
        searchPlaceholder='Ex: Cashier'
        setSearch={setSearch}
        editorState={editorState}
        setEditorState={setEditorState}
        editorPlaceholder='Write about your accomplishments here.'
        examples={Accomplishments}
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

PageAccm.propTypes = {}

export default PageAccm
