import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const ZInput = ({ className, id, label, name, formik, placeholder, maxLength, type }) => {
  const [isFocused, setIsFocused] = useState(false)
  const isFilled = formik.values[name] && formik.values[name].length
  const isValid = !formik.errors[name]
  const isInvalid = formik.touched[name] && formik.errors[name]

  const formGroupClass = classnames('z-form-group', className, {
    'is-focus': isFocused,
    'is-filled': isFilled,
    'is-valid': isValid,
    'is-invalid': isInvalid,
  })

  const labelClass = classnames('control-label')

  return (
    <div className={formGroupClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        maxLength={maxLength}
        className='form-control'
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused ? (
        isInvalid ? (
          <FontAwesomeIcon icon={faTimes} color='#d0021b' />
        ) : (
          isFilled && <FontAwesomeIcon icon={faCheck} color='#15ac31' />
        )
      ) : (
        ''
      )}
      <label className='invalid-feedback'>{formik.errors[name]}</label>
    </div>
  )
}

ZInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  formik: PropTypes.object,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
}

export default ZInput
