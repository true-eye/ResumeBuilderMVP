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
import { JobTitlesArray } from 'utils/constants/index'
import axios from 'axios'
import { useQuery } from 'react-query'
import './Section.scss'

/**
 * @page
 * @route /resume/section/summ
 * @subpage Summary Page
 *
 *
 * @version 0.0.1
 */

const getExamplesBySearch = async (key, search) => {
  const { data } = await axios.get(
    `https://api-embeddedbuilder.zety.com/api/v1/content/texttunercontent?user_uid=eb85afb9-8a24-4eb6-9dcc-b0106bd57139&sectionTypeCD=SUMM&productCD=RWZ&Jobtitle=${search}&searchItemType=jobTitle&documentID=5760c460-28cf-41fb-a215-0dc2f8e80b45&cultureCD=en-US&enableFuzzySearch=false&includeKGSkills=false`,
  )
  return data
}

function useSearch(search) {
  return useQuery(['SUMM', search], getExamplesBySearch, {
    enabled: search,
  })
}

const PageSummSection = () => {
  const info = useSelector(state => state.resume.info)
  const experience = info.expr && info.expr[0] ? info.expr[0] : {}
  const [previous, setPrevious] = useState({})
  const [search, setSearch] = useState(experience ? experience.position : '')
  const [selected, setSelect] = useState(experience ? experience.position : '')
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

  const { status, data, error, isFetching } = useSearch(selected)

  let examples = {}

  if (status !== 'loading' && status !== 'error') {
    data && data.result
      ? data.result.forEach(item => {
          examples[item.contentItemUID] = item
        })
      : {}
  } else if (status === 'loading') {
    examples = previous
  }

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
        searchFor={selected}
        searchList={JobTitlesArray}
        searchPlaceholder='Ex: Cashier'
        setSearch={setSearch}
        loading={status === 'loading'}
        setSelect={newValue => {
          setPrevious(examples)
          setSelect(newValue)
          setCurrentJobTitleIndex(0)
        }}
        editorState={editorState}
        setEditorState={setEditorState}
        editorPlaceholder='Type your achievements and responsibilities here'
        examples={examples}
        nRecommend={2}
        tooltip='Want to see more pre-written examples? Try searching for another title.'
      />
      <ZRelatedJobTitles
        label={`More job titles like ${selected}`}
        current={currentJobTitleIndex}
        jobTitles={relatedJobTitles}
        onSelect={index => {
          setSelect(relatedJobTitles[index])
          setSearch(relatedJobTitles[index])
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
