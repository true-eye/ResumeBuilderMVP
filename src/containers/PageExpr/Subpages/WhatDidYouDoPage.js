import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter } from 'components/themes.js'
import TipContainer from 'containers/TipContainer'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import EditorWrapper from 'containers/EditorWrapper'
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

const WhatDidYouDoPage = ({ info, current, onNext, onBack }) => {
  const experience = info.expr[current] || {}
  const [description, setDescription] = useState(experience.description)
  return (
    <Container className='section-expr section-expr-whatdidyoudo'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>
            What did you do at {experience.company} as a
            <span className='keyword'> {experience.position} </span>
          </h1>
          <p className='sub-title'>
            Get help writing your bullet points with the pre-written examples below.
          </p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer
            data={{
              ...info,
              expr: [
                ...info.expr.slice(0, current),
                { ...info.expr[current], description },
                ...info.expr.slice(current + 1),
              ],
            }}
          >
            <TipContentExpr />
          </TipContainer>
        </Col>
      </Row>
      <EditorWrapper />
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
