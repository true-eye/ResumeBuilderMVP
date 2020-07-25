import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const IntrItem = ({ item }) => {
  return (
    <div className='paragraph PARAGRAPH_INTR firstparagraph  '>
      <div className='clearfix doc-item'>
        <div className='field singlecolumn' id='FIELD_FRFM'>
          <p>{item}</p>
        </div>
      </div>
    </div>
  )
}

const SectionIntr = ({ intr = [] }) => {
  return (
    <div
      className={classnames('section', 'education', 'SECTION_INTR', 'noparagraph', 'multi-para')}
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_INTR'>
            Interests<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className=''>
            {intr.map((item, index) => (
              <IntrItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SectionIntr.propTypes = {
  highlight: PropTypes.bool,
  intr: PropTypes.array,
}

export default SectionIntr
