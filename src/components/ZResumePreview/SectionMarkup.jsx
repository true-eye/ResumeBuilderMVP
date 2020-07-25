import React from 'react'
import PropTypes from 'prop-types'

const SectionMarkup = ({ markup = '', label }) => {
  return (
    <div className='section SECTION_ACCM'>
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_ACCM'>
            {label}
          </div>
        </div>
        <div className=''>
          <div className=''>
            <div className='paragraph PARAGRAPH_ACCM firstparagraph  '>
              <div className='clearfix doc-item'>
                <div
                  className='field singlecolumn'
                  id='FIELD_FRFM'
                  dangerouslySetInnerHTML={{ __html: markup }}
                ></div>
              </div>
              <div className='doc-overlay para-overlay'>
                <span className='badge badge-primary badge-edit'></span>
                <span>&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionMarkup.propTypes = {
  highlight: PropTypes.bool,
  markup: PropTypes.string,
  label: PropTypes.string,
}

export default SectionMarkup
