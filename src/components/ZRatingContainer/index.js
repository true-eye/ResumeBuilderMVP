/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import ZRating from '../ZRating'
import './index.scss'

/**
 * @component
 * @param {number}    value
 * @param {function}  onChange
 *
 * @version 0.0.1
 */

const ZRatingContainer = ({ value, onChange }) => {
  return (
    <div className='z-rating-container'>
      <FontAwesomeIcon className='rating-reset' icon={faMinusCircle} onClick={() => onChange(0)} />
      <ZRating value={value} onChange={onChange} />
    </div>
  )
}

ZRatingContainer.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default ZRatingContainer
