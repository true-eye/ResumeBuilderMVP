import React from 'react'
import PropTypes from 'prop-types'
import SectionName from './SectionName'
import SectionContact from './SectionContact'
import SectionArray from './SectionArray'

const LeftBox = ({ info = {}, highlight }) => {
  const cntc = info.cntc || {}
  const hilt = info.hilt
  const fnlz = info.fnlz || {}

  const sftr = fnlz.sftr || []
  const lang = fnlz.lang || []

  return (
    <div id='CONTAINER_0' className='left-box'>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-NAME'
      >
        <div className='document-tool sec-tool'></div>
        <SectionName {...cntc} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-CNTC'
      >
        <div className='document-tool sec-tool'></div>
        <SectionContact {...cntc} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-HILT'
      >
        <div className='document-tool sec-tool'></div>
        <SectionArray list={hilt} label='Skills' highlight={highlight === 'hilt'} />
      </div>
      {info.more.sftr && (
        <div
          data-react-beautiful-dnd-draggable='1'
          className='sortable-item section-container SortableItem-sibling  data-HILT'
        >
          <div className='document-tool sec-tool'></div>
          <SectionArray list={sftr} label='Software' highlight={highlight === 'sftr'} />
        </div>
      )}
      {info.more.lang && (
        <div
          data-react-beautiful-dnd-draggable='1'
          className='sortable-item section-container SortableItem-sibling  data-LANG'
        >
          <div className='document-tool sec-tool'></div>
          <SectionArray list={lang} label='Languages' highlight={highlight === 'lang'} />
        </div>
      )}
    </div>
  )
}

LeftBox.propTypes = {
  info: PropTypes.object,
  highlight: PropTypes.string,
}

export default LeftBox
