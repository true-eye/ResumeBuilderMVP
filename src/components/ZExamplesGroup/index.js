/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

/**
 * @component
 * @param {object}    examples
 * @param {function}  onSelect
 * @param {number}    nRecommend
 *
 * @version 0.0.1
 */

const ZExamplesGroup = ({ examples, onSelect, nRecommend }) => {
  return (
    <ul className='examples-group'>
      {Object.keys(examples).map((UID, index) => (
        <li
          key={UID}
          className={classnames('examples-item animate-up', {
            'expert-recommended': index < nRecommend,
          })}
          onClick={() => onSelect(UID)}
        >
          <div className='example-icon'>
            <button type='button' className='btn-icon btn-icon-primary rounded-circle  js-addttc' />
          </div>
          <div className='example-text' dangerouslySetInnerHTML={{ __html: examples[UID].text }} />
        </li>
      ))}
    </ul>
  )
}

ZExamplesGroup.propTypes = {
  examples: PropTypes.object,
  onSelect: PropTypes.func,
  nRecommend: PropTypes.number,
}

export default ZExamplesGroup
