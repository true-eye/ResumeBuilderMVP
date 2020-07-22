import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Autosuggest from 'react-autosuggest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

/**
 * @component
 * @param {element}    label
 * @param {string}    id
 * @param {string}    name
 * @param {string}    placeholder
 * @param {number}    maxLength
 * @param {string}    className
 * @param {string}    value
 * @param {function}  onChange
 * @param {string}    tooltip
 *
 * @version 0.0.1
 */

const getSuggestions = (list, field, value) => {
  const inputValue = value.toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : list.filter(lang => lang[field].toLowerCase().slice(0, inputLength) === inputValue)
}

const ZAutosuggest = ({
  id,
  className,
  label,
  name,
  placeholder,
  maxLength,
  formik,
  list = [],
  field = 'title',
}) => {
  const [suggestions, setSuggestions] = useState([])

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

  return (
    <div className={formGroupClass}>
      <label className='control-label' htmlFor={id}>
        {label}
      </label>
      <Autosuggest
        id={id}
        suggestions={suggestions}
        onSuggestionsFetchRequested={input =>
          setSuggestions(getSuggestions(list, field, input.value))
        }
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={suggestion => suggestion[field]}
        renderSuggestion={suggestion => <span>{suggestion[field]}</span>}
        onSuggestionSelected={e =>
          formik.setValues({ ...formik.values, [name]: e.target.textContent })
        }
        inputProps={{
          name,
          value: formik.values[name],
          onChange: e => {
            formik.handleChange(e)
          },
          onFocus: () => {
            setIsFocused(true)
          },
          onBlur: e => {
            setIsFocused(false)
            formik.handleBlur(e)
          },
          maxLength,
          placeholder,
          className: 'form-control',
        }}
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
    </div>
  )
}

ZAutosuggest.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  tooltip: PropTypes.string,
  list: PropTypes.array,
  field: PropTypes.string,
  formik: PropTypes.object,
}

export default ZAutosuggest
