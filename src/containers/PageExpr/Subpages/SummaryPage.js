import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { ZButton, ZButtonGroupFooter, ZSortableList } from 'components/themes.js'
import TipContainer from 'containers/TipContainer'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import './SummaryPage.scss'

/**
 * @page
 * @route /resume/section/expr
 * @subpage Summary Page
 *
 * @param {object}    info  (resume info)
 * @param {number}    current (index of the selected expr)
 * @param {function}  onNext
 * @param {function}  onBack
 *
 * shows all experiences as a list (draggable, addable, deletable, editable)
 *
 * @version 0.0.1
 */

const SummaryPage = ({ info, current, onNext, onBack }) => {
  return (
    <Container className='section-expr section-expr-whatdidyoudo'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>Work history summary</h1>
          <p className='sub-title'></p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={info}>
            <TipContentExpr />
          </TipContainer>
        </Col>
      </Row>
      <ZSortableList />
      <ZButtonGroupFooter>
        <ZButton variant='default'>Back</ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

SummaryPage.propTypes = {
  info: PropTypes.object,
  current: PropTypes.number,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
}

export default SummaryPage
