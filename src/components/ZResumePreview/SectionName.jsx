import React from 'react'
import PropTypes from 'prop-types'

const SectionName = ({ FNAM = '', LNAM = '', DCTL = '' }) => {
  const isEmptyName = !FNAM.length && !LNAM.length
  return (
    <div
      id='SECTION_NAME8de773b2-7df2-40d2-9a9e-a4c66a743269'
      className='section notdraggable SECTION_NAME firstsection  '
      data-section-cd='NAME'
    >
      <div className=' doc-item'>
        <div className=''>
          <div className=''>
            <div
              id='PARAGRAPH_NAME_11e92e16-a942-4eed-ac50-d16d0f199204'
              className='paragraph PARAGRAPH_NAME firstparagraph placeholder-text '
            >
              <div>
                <div className='name word-break'>
                  <span className='field' id='FIELD_FNAM'>
                    {isEmptyName ? 'Your' : FNAM}
                  </span>
                  &nbsp;
                  <span className='field word-break' id='FIELD_LNAM'>
                    {isEmptyName ? 'Name' : LNAM}
                  </span>
                </div>
                <div className='resumeTitle placeholder-text' id='FIELD_DCTL'>
                  {DCTL || 'Profession'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionName.propTypes = {
  FNAM: PropTypes.string,
  LNAM: PropTypes.string,
  DCTL: PropTypes.string,
}

export default SectionName
