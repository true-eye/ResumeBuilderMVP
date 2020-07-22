import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SectionSkills = ({ highlight }) => {
  return (
    <div
      id='SECTION_HILTb81cfecc-8bb8-4f50-92ec-60ec58e615e0'
      className={classnames('section', 'SECTION_HILT', 'noparagraph', 'multi-para', {
        'preview-template-highlighter': highlight,
      })}
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
  )
}

SectionSkills.propTypes = {
  highlight: PropTypes.bool,
}

export default SectionSkills
