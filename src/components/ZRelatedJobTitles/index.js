/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

/**
 * @component
 * @param {array}     jobTitles
 * @param {string}    label
 * @param {number}    current
 * @param {function}  onSelect
 *
 * @version 0.0.1
 */

const ZRelatedJobTitles = ({ jobTitles = [], label, current, onSelect }) => {
  return (
    <div className='related-job-titles-wrapper'>
      <p className='related-job-titles-heading'>{label}</p>
      <section className='related-job-titles-section'>
        <ul className='list-relatedjobtitle list-more-items'>
          {jobTitles.map((title, index) => (
            <li
              className={classnames('list-relatedjobtitle-item', {
                'active-relatedjobtitle': index === current,
              })}
              data-text={title}
              key={index}
              onClick={() => onSelect(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

ZRelatedJobTitles.propTypes = {
  jobTitles: PropTypes.array,
  label: PropTypes.string,
  current: PropTypes.number,
  onSelect: PropTypes.func,
}

export default ZRelatedJobTitles
