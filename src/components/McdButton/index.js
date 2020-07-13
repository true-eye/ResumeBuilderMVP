/* eslint-disable react/button-has-type */
import React from 'react'
import classnames from 'classnames'
import { Spinner } from 'react-bootstrap'
import './index.scss'

const McdButton = ({
  children,
  primary = false,
  type = 'button',
  round = false,
  outline = false,
  compact = false,
  onClick,
  loading = false,
  disabled = false,
}) => {
  const btnClass = classnames('mcd-button', {
    'mcd-button-primary': primary,
    'mcd-button-round': round,
    'mcd-button-outline': outline,
    'mcd-button-compact': compact,
    'mcd-button-disabled': disabled || loading,
  })

  return (
    <button
      className={btnClass}
      type={type}
      onClick={e => {
        if (onClick) onClick(e)
      }}
    >
      {children}{' '}
      {loading && (
        <>
          &nbsp;
          <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
        </>
      )}
    </button>
  )
}

export default McdButton
