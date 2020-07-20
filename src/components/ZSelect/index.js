import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import './index.scss'

/**
 * @component
 * @param {string}    id
 * @param {string}    label
 * @param {string}    name    (field name of formik form)
 * @param {object}    formik
 * @param {string}    placeholder
 * @param {bool}      disabled
 * @param {array}     options
 *
 * @version 0.0.1
 */

const customStyles = {
  control: provided => ({
    ...provided,
    border: '1px solid #d7dde2',
    height: 'calc(2.25rem + 2px)',
    minHeight: '40px',
    background: '#fff',
    lineHeight: '2.4',
    padding: '.375rem 0.6rem .375rem 1.2rem',
    borderRadius: 0,
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '14px',
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '14px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    background: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? '#333' : '#58585f',
    cursor: 'pointer',
    padding: '.5rem .75rem',
    background: state.isSelected || state.isFocused ? '#f6f8fa' : '#fff',
    fontSize: '13px',
    lineHeight: '19px',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: '#fff',
    marginTop: '10px',
    maxHeight: '200px',
    position: 'absolute',
    top: '100%',
    width: '100%',
    zIndex: '1',
    boxShadow: '0 0 8px 4px rgba(17,17,17,0.1)',
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '150px',
    overflowY: 'auto',
    fontSize: '13px',
  }),
}

const ZSelect = ({ id, label, name, formik, placeholder, disabled, options = [] }) => {
  const isFilled = formik.values[name] && formik.values[name].length
  const isValid = !formik.errors[name]
  const isInvalid = formik.touched[name] && formik.errors[name]

  const formGroupClass = classnames('z-form-group', {
    'is-filled': isFilled,
    'is-valid': isValid,
    'is-invalid': isInvalid,
  })

  const labelClass = classnames('control-label')

  const value = formik.values[name]
  const selected = options.find(option => option.value === value)

  return (
    <div className={formGroupClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <Select
        options={options}
        className='Select'
        classNamePrefix='Select'
        id={id}
        name={name}
        disabled={disabled}
        styles={customStyles}
        placeholder={placeholder}
        isSearchable={false}
        value={selected}
        onChange={item => {
          formik.setValues({ ...formik.values, [name]: item.value })
        }}
      />

      {isInvalid ? (
        <FontAwesomeIcon className='z-input-invalid-icon' icon={faTimes} color='#d0021b' />
      ) : (
        isFilled && (
          <FontAwesomeIcon className='z-input-valid-icon' icon={faCheck} color='#15ac31' />
        )
      )}
      <label className='invalid-feedback'>{formik.errors[name]}</label>
    </div>
  )
}

ZSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  formik: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
}

export default ZSelect
