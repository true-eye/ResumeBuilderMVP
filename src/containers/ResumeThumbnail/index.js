import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ZButton } from 'components/themes.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import ZResumePreview from 'components/ZResumePreview'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.scss'

/**
 * @component
 * @param {object}    info
 * @param {className} string
 * @param {string}    highlight
 *
 * 1. resume preview with zoom in
 * 2. resume preview modal with zoom out
 *
 * @version 0.0.1
 */

const ResumeThumbnail = ({ info, className, highlight }) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className={classNames('resume-thumbnail', className)}>
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        size='lg'
        className='modal-preview-resume'
      >
        <Modal.Header closeButton></Modal.Header>
        <div className='custom-preview-scrollbar scroll-wrapper'>
          <ZResumePreview info={info} />
        </div>
      </Modal>
      <div
        role='button'
        tabIndex='0'
        className='resume-preview'
        onClick={() => setShowPopup(true)}
        onKeyDown={() => {}}
      >
        <ZResumePreview info={info} highlight={highlight} />
      </div>
      <p className='btn-preview-ctnr'>
        <ZButton className='btn-preview' onClick={() => setShowPopup(true)}>
          <FontAwesomeIcon icon={faEye} />
          &nbsp; Preview
        </ZButton>
      </p>
    </div>
  )
}

ResumeThumbnail.propTypes = {
  info: PropTypes.object,
  className: PropTypes.string,
  highlight: PropTypes.string,
}

export default ResumeThumbnail
