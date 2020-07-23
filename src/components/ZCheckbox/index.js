import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Form } from 'react-bootstrap'
import './index.scss'

/**
 * @component
 * @param {string}    id
 * @param {string}    label
 * @param {string}    name    (field name of formik form)
 * @param {object}    formik
 * @param {function}  onChange
 * @param {string}    className
 *
 * @version 0.0.1
 */

const ZCheckbox = ({ id, label, name, formik, onChange, className }) => {
  const isFilled = formik.values[name] && formik.values[name].length
  const isValid = !formik.errors[name]
  const isInvalid = formik.touched[name] && formik.errors[name]

  const checkboxClass = classnames('z-checkbox', { checked: !!formik.values[name] }, className)

  return (
    <Form.Check
      id={id}
      name={name}
      label={label}
      type='checkbox'
      className={checkboxClass}
      value={formik.values[name]}
      checked={formik.values[name]}
      onChange={e => {
        formik.handleChange(e)
        onChange && onChange(e.target.checked)
      }}
    />
  )
}

ZCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  formik: PropTypes.object,
  onChange: PropTypes.func,
  className: PropTypes.string,
}

export default ZCheckbox
