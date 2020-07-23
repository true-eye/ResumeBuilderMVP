import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SectionSummary = ({ highlight = false, summ }) => {
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
                <div
                  className='field singlecolumn'
                  id='FIELD_FRFM'
                  dangerouslySetInnerHTML={{ __html: summ }}
                />
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
  summ: PropTypes.string,
}

export default SectionSummary
