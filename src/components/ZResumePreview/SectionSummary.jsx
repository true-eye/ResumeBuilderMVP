import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SectionSummary = ({ highlight = false }) => {
  return (
    <div
      id='SECTION_SUMMa97a3f24-952d-4baf-adf5-6bc5359c9f77'
      className={classnames('section', 'summary', 'SECTION_SUMM', 'noparagraph', 'notdraggable', {
        'preview-template-highlighter': highlight,
      })}
      data-section-cd='SUMM'
    >
      <div className=' doc-item'>
        <div className=''>
          <div className=''>
            <div
              id='PARAGRAPH_SUMM_0'
              className='paragraph PARAGRAPH_SUMM firstparagraph placeholder-text '
            >
              <div className='clearfix doc-item'>
                <div className='field singlecolumn' id='FIELD_FRFM'>
                  Highly motivated Sales Associate with extensive customer service and sales
                  experience. Outgoing sales professional with track record of driving increased
                  sales, improving buying experience and elevating company profile with target
                  market.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionSummary.propTypes = {
  highlight: PropTypes.bool,
}

export default SectionSummary
