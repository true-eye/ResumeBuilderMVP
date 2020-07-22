import React from 'react'
import PropTypes from 'prop-types'
import SectionName from './SectionName'
import SectionContact from './SectionContact'
import SectionSkills from './SectionSkills'

const LeftBox = ({ info = {}, highlight }) => {
  const cntc = info.cntc || {}
  const hilt = info.hilt

  return (
    <div id='CONTAINER_0' className='left-box'>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-NAME'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionName {...cntc} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-CNTC'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionContact {...cntc} />
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-HILT'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <SectionSkills {...hilt} highlight={highlight === 'hilt'} />
      </div>
    </div>
  )
}

LeftBox.propTypes = {
  info: PropTypes.object,
  highlight: PropTypes.string,
}

export default LeftBox
