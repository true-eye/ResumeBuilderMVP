import React from 'react'
import { useHistory } from 'react-router-dom'
import { completeStepAction, saveStepAction } from 'actions/resume'
import TipContainer from 'containers/TipContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { TipContentExpr } from 'containers/TipContainer/Contents'
import { ZButton, ZButtonGroupFooter, ZSortableList } from 'components/themes.js'
import ItemRendererEduc from './ItemRenderer'

/**
 * @page
 * @route /resume/section/educ
 * @subpage Summary Page
 *
 *
 * shows all educations as a list (draggable, addable, deletable, editable)
 *
 * @version 0.0.1
 */

const SummaryPage = () => {
  const info = useSelector(state => state.resume.info)
  const dispatch = useDispatch()
  const history = useHistory()

  const onAddEduc = () => {
    history.push('/resume/section/educ-det')
  }

  const onMove = newList => {
    dispatch(saveStepAction('educ', [...newList]))
  }

  const onEditEduc = index => {
    history.push(`/resume/section/educ-det/${info.educ[index].id}`)
  }

  const onDeleteEduc = index => {
    const length = !info.educ ? 0 : info.educ.length
    dispatch(saveStepAction('educ', [...info.educ.slice(0, index), ...info.educ.slice(index + 1)]))

    if (!info.educ || length <= 1) {
      history.push('/resume/section/educ-det')
    }
  }

  const onNext = () => {
    dispatch(completeStepAction('educ'))
    history.push('/resume/tips/hilt')
  }

  const onBack = () => {
    history.push('/resume/tips/educ')
  }

  return (
    <Container className='section-educ section-educ-summary'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>Education summary</h1>
          <p className='sub-title'></p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={info}>
            <TipContentExpr />
          </TipContainer>
        </Col>
      </Row>
      <ZSortableList
        list={info.educ || []}
        onChange={onMove}
        onAdd={onAddEduc}
        onSelect={onEditEduc}
        onEdit={onEditEduc}
        onDelete={onDeleteEduc}
        labelPlus='ADD ANOTHER DEGREE'
      >
        <ItemRendererEduc />
      </ZSortableList>
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT: SKILLS
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

SummaryPage.propTypes = {}

export default SummaryPage
