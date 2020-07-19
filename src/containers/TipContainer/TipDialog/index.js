import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useOutsideClick } from 'utils/hooks'
import './index.scss'

/**
 * @component
 * @param {function}    onClose
 * @param {element}     children
 * @param {bool}        show
 *
 * For open & close animation, use hidden-tool-tip class
 * For outside dialog click event, useOutsideClick hook
 *
 * @version 0.0.1
 */

const TipDialog = ({ onClose, children, show }) => {
  const ref = useRef()
  useOutsideClick(ref, () => {
    if (show) {
      onClose()
    }
  })
  const dialogClass = classnames('modal-tip-dialog', { 'hidden-tool-tip': !show })

  return (
    <div className={dialogClass} role='tooltip' ref={ref}>
      <div className='modal-tip-content'>
        <div className='modal-tip-header'>
          <a className='close-tip' onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} color='#d7dde2' />
          </a>
        </div>
        <div className='modal-tip-body'>{children}</div>
      </div>
    </div>
  )
}

TipDialog.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  show: PropTypes.bool,
}

export default TipDialog
