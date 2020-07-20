import React from 'react'
import PropTypes from 'prop-types'
import { saveStepAction } from 'actions/resume'
import TipContainer from 'containers/TipContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import { ZButton, ZButtonGroupFooter, ZSortableList } from 'components/themes.js'
import { Pages } from '../Section'
import './SummaryPage.scss'

/**
 * @page
 * @route /resume/section/expr
 * @subpage Summary Page
 *
 * @param {function}  onNext
 * @param {function}  onBack
 * @param {function}  setPage
 * @param {function}  setCurrent
 *
 * shows all experiences as a list (draggable, addable, deletable, editable)
 *
 * @version 0.0.1
 */

const SummaryPage = ({ onNext, onBack, setPage, setCurrent }) => {
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()

  const onAddExpr = () => {
    setPage(Pages.AddJob)
  }

  const onMove = newList => {
    dispatch(saveStepAction('expr', [...newList]))
  }

  const onEditExpr = index => {
    setCurrent(index)
    setPage(Pages.EditJob)
  }

  const onDeleteExpr = index => {
    dispatch(saveStepAction('expr', [...info.expr.slice(0, index), ...info.expr.slice(index + 1)]))

    if (!info.expr || info.expr.length <= 1) {
      setPage(Pages.AddJob)
    }
  }

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
      <ZSortableList
        list={info.expr || []}
        onChange={onMove}
        onAdd={onAddExpr}
        onSelect={onEditExpr}
        onEdit={onEditExpr}
        onDelete={onDeleteExpr}
      />
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT: EDUCATION
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

SummaryPage.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  setPage: PropTypes.func,
  setCurrent: PropTypes.func,
}

export default SummaryPage
