/* eslint-disable react/button-has-type */
import React from 'react'
import classnames from 'classnames'
import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './index.scss'

const ZButton = ({ children, variant = 'default', onClick, loading = false, disabled = false }) => {
  const btnClass = classnames('z-btn', `z-btn-${variant}`, {
    'z-btn-disabled': disabled || loading,
  })

  return (
    <button
      className={btnClass}
      type='button'
      onClick={e => {
        if (onClick) onClick(e)
      }}
    >
      {children}&nbsp;
      {loading && (
        <>
          &nbsp;
          <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
        </>
      )}
    </button>
  )
}

ZButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ZButton