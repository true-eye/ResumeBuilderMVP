/* eslint-disable react/button-has-type */
import React from 'react'
import classnames from 'classnames'
import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @component
 * @param {children}    ReactElement
 * @param {string}      variant (primary | default)
 * @param {bool}        loading
 * @param {bool}        disabled
 * @param {string}      className
 * @param {bool}        block
 * @param {object}       style
 *
 * @version 0.0.1
 */

const ZButton = ({
  children,
  className,
  variant = 'default',
  onClick,
  loading = false,
  disabled = false,
  block = false,
  style = {},
}) => {
  const btnClass = classnames(
    'z-btn',
    `z-btn-${variant}`,
    {
      'z-btn-disabled': disabled || loading,
      'z-btn-block': block,
    },
    className,
  )

  return (
    <button
      className={btnClass}
      type='button'
      onClick={e => {
        if (onClick) onClick(e)
      }}
      style={style}
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  variant: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  block: PropTypes.bool,
  style: PropTypes.object,
}

export default ZButton
