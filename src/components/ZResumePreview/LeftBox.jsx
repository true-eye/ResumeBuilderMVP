import React from 'react'
import PropTypes from 'prop-types'
import SectionName from './SectionName'
import SectionContact from './SectionContact'

const LeftBox = ({ data = {} }) => {
  const cntc = data.cntc || {}

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
        <div
          id='SECTION_HILTb81cfecc-8bb8-4f50-92ec-60ec58e615e0'
          className='section SECTION_HILT  noparagraph '
          data-section-cd='HILT'
        >
          <div className=' doc-item'>
            <div className='heading'>
              <div className='sectiontitle' id='SECTIONNAME_HILT'>
                Skills<span className='rename-section text-rename'> </span>
              </div>
            </div>
            <div className=''>
              <div className=''>
                <div
                  id='PARAGRAPH_HILT_0'
                  className='paragraph PARAGRAPH_HILT firstparagraph placeholder-text '
                >
                  <div className='clearfix doc-item'>
                    <div className='singlecolumn maincolumn'>
                      <span className='paddedline' id='FIELD_SKC1'>
                        <ul>
                          <li>Guest services</li>
                          <li>Inventory control procedures</li>
                          <li>Merchandising expertise</li>
                        </ul>
                      </span>

                      <span className='paddedline txtRight' id='FIELD_RATT'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LeftBox.propTypes = {
  data: PropTypes.object,
}

export default LeftBox
