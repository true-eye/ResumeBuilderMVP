import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import ZResumePreview from 'components/ZResumePreview'
import TipDialog from './TipDialog'
import './index.scss'

/**
 * @component
 * @param {object}    info (resume info)
 *
 *
 * @version 0.0.1
 */

const TipContainer = ({ info, children }) => {
  const [showTip, setShowTip] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div id='headerContainerTip' className='container-tip'>
      <a className='dropdown-switcher link btn-preview-link' onClick={() => setShowPopup(true)}>
        <FontAwesomeIcon icon={faEye} color='#48a4ff' />
        &nbsp; Preview
      </a>
      <a className='dropdown-switcher link link-v-separator' onClick={() => setShowTip(true)}>
        <FontAwesomeIcon icon={faLightbulb} color='#48a4ff' />
        &nbsp; Tips
      </a>
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
      <TipDialog show={showTip} onClose={() => setShowTip(false)}>
        {children}
      </TipDialog>
    </div>
  )
}

TipContainer.propTypes = {
  info: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default TipContainer
