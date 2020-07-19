import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter, ZRelatedJobTitles } from 'components/themes.js'
import TipContainer from 'containers/TipContainer'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import EditorWrapper from 'containers/EditorWrapper'
import { ContentState, EditorState, convertFromHTML, Modifier, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
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
 *
 * show preview with updated experience
 *
 * @version 0.0.1
 */

const examples = {
  '02e95cbe-f7e8-e811-8607-281878761e1e': {
    contentItemUID: '02e95cbe-f7e8-e811-8607-281878761e1e',
    text:
      'Analyzed requirements and designed, developed and implemented software applications for multiple websites.',
  },
  'ca8681ac-cd4c-e911-80f4-2818787aff86': {
    contentItemUID: 'ca8681ac-cd4c-e911-80f4-2818787aff86',
    text: 'Adjusted software parameters to boost performance and incorporate new features.',
  },
  'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc': {
    contentItemUID: 'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc',
    text: 'Designed, implemented and monitored web pages and sites for continuous improvement.',
  },
  'cc3369c7-f010-e811-80c2-0003ffb4c40f': {
    contentItemUID: 'cc3369c7-f010-e811-80c2-0003ffb4c40f',
    text:
      'Developed programs from ground up using measured, market-focused approach to eliminate waste and streamline implementation cycle.',
  },
  '2dbf5b2c-7033-e811-80c2-0003ffb4c521': {
    contentItemUID: '2dbf5b2c-7033-e811-80c2-0003ffb4c521',
    text: 'Collaborated with IT team and other support staff to develop new applications.',
  },
  '8a87c6c7-d00e-e811-80c2-0003ffb4c24e': {
    contentItemUID: '8a87c6c7-d00e-e811-80c2-0003ffb4c24e',
    text:
      'Partnered with team members, including <span class="ttc_token" style="color:#0000ff">[Job title]</span>s and <span class="ttc_token" style="color:#0000ff">[Job title]</span>s to minimize project delays.',
  },
}

const relatedJobTitles = [
  'Senior Software Engineer',
  'Associate Software Engineer',
  'Software Test Engineer',
  'Junior Software Engineer',
  'Software Development Engineer',
  'Software Quality Assurance Engineer',
  'Software Engineer Intern',
  'Software Engineer Trainee',
  'Software Testing Engineer',
  'Principal Software Engineer',
]

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

const WhatDidYouDoPage = ({ info, current, onNext, onBack }) => {
  const experience = info.expr[current] || {}
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

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

  const onSelectExample = UID => {
    const currentSelection = editorState.getSelection()

    if (examples[UID]) {
      const blocksFromHTML = convertFromHTML(`<li>${examples[UID].text}</li><li />`)
      const insertingContentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      )
      const newContent = Modifier.replaceWithFragment(
        currentContent,
        currentSelection,
        insertingContentState.getBlockMap(),
      )

      const newEditorState = EditorState.push(editorState, newContent, 'insert-fragment')
      setEditorState(newEditorState)
    }
  }

  return (
    <Container className='section-expr section-expr-whatdidyoudo'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <PageTitle experience={experience} />
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer data={updatedResume}>
            <TipContentExpr />
          </TipContainer>
        </Col>
      </Row>
      <EditorWrapper
        search={search}
        setSearch={setSearch}
        editorState={editorState}
        setEditorState={setEditorState}
        examples={examples}
        onSelectExample={onSelectExample}
      />
      <ZRelatedJobTitles
        label='More job titles like Developer'
        current={currentJobTitleIndex}
        jobTitles={relatedJobTitles}
        onSelect={setCurrentJobTitleIndex}
      />
      <ZButtonGroupFooter>
        <ZButton variant='default'>Back</ZButton>
        <ZButton variant='primary' onClick={onNext}>
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
}

export default WhatDidYouDoPage
