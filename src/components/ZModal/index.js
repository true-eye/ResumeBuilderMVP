import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

/**
 * @component
 * @param {bool}    loading
 * @param {object}  style
 *
 * @version 0.0.1
 */

const ZModal = ({ loading, style }) => {
  return (
    <div
      id='sectionLoader'
      className={classnames('section-loader-new ', { hide: !loading })}
      style={style}
    >
      <div></div>
    </div>
  )
}

ZModal.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.object,
}

export default ZModal
