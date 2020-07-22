import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import './index.scss'

/**
 * @component
 * @param {string}    id
 * @param {string}    label
 * @param {string}    name    (field name of formik form)
 * @param {object}    formik
 * @param {string}    placeholder
 * @param {number}    maxLength
 * @param {string}    type    (input type: text | number)
 * @param {string}    className
 * @param {function}  onFocus
 * @param {function}  onBlur
 * @param {bool}      preventChange
 * @param {string}    formattedValue
 * @param {string}    autoComplete
 * @param {bool}      disabled
 *
 * @version 0.0.1
 */

const ZInput = ({
  className,
  id,
  label,
  name,
  formik,
  placeholder,
  maxLength,
  type,
  onFocus,
  onBlur,
  preventChange = false,
  formattedValue = null,
  autoComplete = 'on',
  icon = null,
  disabled,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const isFilled = _.get(formik.values, name) && _.get(formik.values, name).length
  const isValid = !_.get(formik.errors, name)
  const isInvalid = _.get(formik.touched, name) && _.get(formik.errors, name)

  const formGroupClass = classnames('z-form-group', className, {
    'is-focus': isFocused,
    'is-filled': isFilled,
    'is-valid': isValid,
    'is-invalid': isInvalid,
    'has-icon': !!icon,
  })

  const labelClass = classnames('control-label')

  return (
    <div className={formGroupClass}>
      {label && (
        <label className={labelClass} htmlFor={id}>
          {label}
        </label>
      )}
      <span className='prefix'>{icon ? icon : ''}</span>

      <input
        id={id}
        name={name}
        type={type}
        maxLength={maxLength}
        className='form-control'
        placeholder={placeholder}
        value={preventChange ? formattedValue : _.get(formik.values, name)}
        onChange={preventChange ? () => {} : formik.handleChange}
        onFocus={() => {
          setIsFocused(true)
          onFocus && onFocus()
        }}
        onBlur={e => {
          setIsFocused(false)
          formik.handleBlur(e)
          onBlur && onBlur()
        }}
        autoComplete={autoComplete}
        disabled={disabled}
      />
      {!isFocused ? (
        isInvalid ? (
          <FontAwesomeIcon className='z-input-invalid-icon' icon={faTimes} color='#d0021b' />
        ) : (
          isFilled && (
            <FontAwesomeIcon className='z-input-valid-icon' icon={faCheck} color='#15ac31' />
          )
        )
      ) : (
        ''
      )}
      <label className='invalid-feedback'>{_.get(formik.errors, name)}</label>
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
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  preventChange: PropTypes.bool,
  formattedValue: PropTypes.string,
  autoComplete: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
}

export default ZInput
