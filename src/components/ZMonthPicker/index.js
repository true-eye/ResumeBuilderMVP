import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import Calendar from 'react-calendar'
import moment from 'moment'
import _ from 'lodash'
import ZInput from '../ZInput'
import './index.scss'

/**
 * @component
 * @param {string}    id
 * @param {string}    label
 * @param {string}    name    (field name of formik form)
 * @param {object}    formik
 * @param {bool}      disabled
 * @param {func}      onChange
 *
 * @todo
 * 1. Catch onBlur Event for Calendar
 *
 * @version 0.0.1
 */

const ZMonthPicker = ({ id, name, formik, label, disabled, onChange }) => {
  const [showPicker, setShowPicker] = useState(false)

  const value = _.get(formik.values, name)

  return (
    <>
      <ZInput
        id={id}
        name={name}
        type='text'
        label={label}
        formik={formik}
        placeholder='Select'
        autoComplete='off'
        onFocus={() => setShowPicker(true)}
        icon={<FontAwesomeIcon icon={faCalendarAlt} color='#9b9b9b' />}
        disabled={disabled}
        preventChange
        formattedValue={value ? moment(value).format('MMM YYYY') : ''}
      />
      {showPicker && !disabled ? (
        <Calendar
          className='z-calendar'
          name={name}
          onClickMonth={(month, event) => {
            formik.setValues({ ...formik.values, [name]: month })
            onChange && onChange(month)
            setShowPicker(false)
          }}
          value={value}
          defaultView='year'
          prevLabel={<FontAwesomeIcon icon={faCaretLeft} color='#5eaaf7' />}
          nextLabel={<FontAwesomeIcon icon={faCaretRight} color='#5eaaf7' />}
          next2Label={null}
          prev2Label={null}
          formatMonth={(locale, date) => moment(date).format('MMM')}
        />
      ) : (
        ''
      )}
    </>
  )
}

ZMonthPicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  formik: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default ZMonthPicker
