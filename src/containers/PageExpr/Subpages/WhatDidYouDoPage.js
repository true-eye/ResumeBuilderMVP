import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter, ZRelatedJobTitles } from 'components/themes.js'
import TipContainer from 'containers/TipContainer'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import EditorWrapper from 'containers/EditorWrapper'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { JobTitlesArray } from 'utils/constants/index'
import axios from 'axios'
import { useQuery } from 'react-query'
import './WhatDidYouDoPage.scss'

/**
 * @page
 * @route /resume/section/expr
 * @subpage What did you do at Company as Position
 *
 * @param {object}    info  (resume info)
 * @param {number}    current (index of the selected expr)
 * @param {function}  onNext
 * @param {function}  onBack
 * @param {string}    initialValue
 *
 * show preview with updated experience
 *
 * @version 0.0.1
 */

// const examples = {
//   '02e95cbe-f7e8-e811-8607-281878761e1e': {
//     contentItemUID: '02e95cbe-f7e8-e811-8607-281878761e1e',
//     text:
//       'Analyzed requirements and designed, developed and implemented software applications for multiple websites.',
//   },
//   'ca8681ac-cd4c-e911-80f4-2818787aff86': {
//     contentItemUID: 'ca8681ac-cd4c-e911-80f4-2818787aff86',
//     text: 'Adjusted software parameters to boost performance and incorporate new features.',
//   },
//   'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc': {
//     contentItemUID: 'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc',
//     text: 'Designed, implemented and monitored web pages and sites for continuous improvement.',
//   },
//   'cc3369c7-f010-e811-80c2-0003ffb4c40f': {
//     contentItemUID: 'cc3369c7-f010-e811-80c2-0003ffb4c40f',
//     text:
//       'Developed programs from ground up using measured, market-focused approach to eliminate waste and streamline implementation cycle.',
//   },
//   '2dbf5b2c-7033-e811-80c2-0003ffb4c521': {
//     contentItemUID: '2dbf5b2c-7033-e811-80c2-0003ffb4c521',
//     text: 'Collaborated with IT team and other support staff to develop new applications.',
//   },
//   '8a87c6c7-d00e-e811-80c2-0003ffb4c24e': {
//     contentItemUID: '8a87c6c7-d00e-e811-80c2-0003ffb4c24e',
//     text:
//       'Partnered with team members, including <span class="ttc_token" style="color:#0000ff">[Job title]</span>s and <span class="ttc_token" style="color:#0000ff">[Job title]</span>s to minimize project delays.',
//   },
// }

const PageTitle = ({ experience }) => (
  <>
    <h1 className='page-title'>
      What did you do at {experience.company} as a
      <span className='keyword'> {experience.position} </span>
    </h1>
    <p className='sub-title'>
      Get help writing your bullet points with the pre-written examples below.
    </p>
  </>
)

PageTitle.propTypes = {
  experience: PropTypes.object,
}

const getExamplesBySearch = async (key, search) => {
  const { data } = await axios.get(
    `https://api-embeddedbuilder.zety.com/api/v1/content/texttunercontent?user_uid=eb85afb9-8a24-4eb6-9dcc-b0106bd57139&sectionTypeCD=EXPR&productCD=RWZ&Jobtitle=${search}&searchItemType=jobTitle&documentID=5760c460-28cf-41fb-a215-0dc2f8e80b45&cultureCD=en-US&enableFuzzySearch=false&includeKGSkills=false`,
  )
  return data
}

function useSearch(search) {
  return useQuery(['jobTitle', search], getExamplesBySearch, {
    enabled: search,
  })
}

const WhatDidYouDoPage = ({ info, current, onNext, onBack, initialValue }) => {
  const experience = info.expr[current] || {}
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0)
  const [search, setSearch] = useState(experience ? experience.position : '')
  const [selected, setSelect] = useState(experience ? experience.position : '')
  const [previous, setPrevious] = useState({})
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(initialValue))),
  )

  const currentContent = editorState.getCurrentContent()
  const rawContentState = convertToRaw(currentContent)
  const markup = draftToHtml(rawContentState)

  const updatedResume = {
    ...info,
    expr: [
      ...info.expr.slice(0, current),
      { ...info.expr[current], description: markup },
      ...info.expr.slice(current + 1),
    ],
  }

  const currentJobTitle = JobTitlesArray.find(job => job.title === selected)
  const relatedJobTitles = currentJobTitle ? currentJobTitle.relatedJobTitles : []

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
    <Container className='section-expr section-expr-whatdidyoudo'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <PageTitle experience={experience} />
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={updatedResume}>
            <TipContentExpr />
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
        <ZButton variant='primary' onClick={() => onNext(markup)}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

WhatDidYouDoPage.propTypes = {
  info: PropTypes.object,
  current: PropTypes.number,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  initialValue: PropTypes.string,
}

export default WhatDidYouDoPage
