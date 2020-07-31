import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import Autosuggest from 'react-autosuggest'
import ZTooltip from '../ZTooltip'
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

const ZSearch = ({
  id,
  className,
  label,
  name,
  placeholder,
  maxLength,
  value,
  onChange,
  onSelect,
  tooltip,
  list = [],
  field = 'title',
}) => {
  const [suggestions, setSuggestions] = useState([])
  const formGroupClass = classnames('z-search', className)

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
        onSuggestionSelected={(event, { suggestion }) => {
          onSelect(suggestion[field])
        }}
        renderSuggestion={suggestion => <span>{suggestion[field]}</span>}
        inputProps={{
          name,
          value,
          onKeyDown: (e, f) => {
            if (e.keyCode === 13) {
              onSelect(e.target.value)
            }
          },
          onChange,
          maxLength,
          placeholder,
          className: 'form-control',
        }}
      />
      <FontAwesomeIcon icon={faSearch} />
      {tooltip && <ZTooltip className='search-tool-tip'>{tooltip}</ZTooltip>}
    </div>
  )
}

ZSearch.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  tooltip: PropTypes.string,
  list: PropTypes.array,
  field: PropTypes.string,
}

export default ZSearch
