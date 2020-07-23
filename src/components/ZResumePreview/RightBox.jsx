import React from 'react'
import PropTypes from 'prop-types'
import SectionSummary from './SectionSummary'
import SectionExpr from './SectionExpr'
import SectionEduc from './SectionEduc'

const RightBox = ({ info = {}, highlight }) => {
  const expr = info.expr
  const educ = info.educ
  const summ = info.summ

  return (
    <div id='CONTAINER_1' className='right-box'>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-SUMM'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionSummary summ={summ} highlight={highlight === 'summ'} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-EXPR'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionExpr expr={expr} highlight={highlight === 'expr'} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-EDUC'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionEduc educ={educ} highlight={highlight === 'educ'} />
      </div>
    </div>
  )
}

RightBox.propTypes = {
  info: PropTypes.object,
  highlight: PropTypes.string,
}

export default RightBox
