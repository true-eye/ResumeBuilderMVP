import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @component
 * @param {element}    children
 * @param {string}    className
 *
 * @version 0.0.1
 */

const ZTooltip = ({ children, className }) => {
  return <span className={classNames('tool-tip', className)}>{children}</span>
}

ZTooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
}

export default ZTooltip
