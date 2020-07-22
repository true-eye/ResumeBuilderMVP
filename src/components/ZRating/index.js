/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

/**
 * @component
 * @param {number}    value
 * @param {function}  onChange
 *
 * @version 0.0.1
 */

const ZRating = ({ value, onChange }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        className={classnames('z-rating-item', { 'z-rating-item-active': i <= value })}
        icon={faStar}
        key={i}
        onClick={() => onChange(i)}
      />,
    )
  }

  return <div className='z-rating'>{stars}</div>
}

ZRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default ZRating
