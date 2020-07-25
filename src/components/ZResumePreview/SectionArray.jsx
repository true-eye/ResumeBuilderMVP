import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ArrayItem = ({ item }) => {
  const score = item ? item.score : 0
  const title = item ? item.title : ''

  return (
    <div className='paragraph PARAGRAPH_HILT firstparagraph  '>
      <div className='clearfix doc-item'>
        <div className='singlecolumn maincolumn'>
          <span className='paddedline'>
            <p>{title}</p>
          </span>
          {score ? (
            <div className='outer-square'>
              <div
                className='inner-square'
                type='width'
                style={{ width: `${(score * 100) / 5}%` }}
              ></div>
            </div>
          ) : (
            ''
          )}
          <span className='paddedline txtRight'></span>
        </div>
      </div>
      <div className='doc-overlay para-overlay'>
        <span className='badge badge-primary badge-edit'></span>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

const SectionArray = ({ highlight, list = [], label }) => {
  return (
    <div
      className={classnames('section', 'SECTION_SFTR', {
        'preview-template-highlighter': highlight,
      })}
      data-section-cd='SFTR'
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_SFTR'>
            {label}
            <span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className='sortableInner'>
            {list.map((item, index) => (
              <ArrayItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SectionArray.propTypes = {
  highlight: PropTypes.bool,
  list: PropTypes.array,
}

export default SectionArray
