import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ZButton } from 'components/themes.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ZResumePreview from 'components/ZResumePreview'
import PropTypes from 'prop-types'
import './ResumeThumbnail.scss'

const ResumeThumbnail = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className='resume-thumbnail'>
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        size='lg'
        className='modal-preview-resume'
      >
        <Modal.Header closeButton>{/* <Modal.Title>Modal heading</Modal.Title> */}</Modal.Header>
        <div className='custom-preview-scrollbar scroll-wrapper'>
          <ZResumePreview data={data} />
        </div>
      </Modal>
      <div
        role='button'
        tabIndex='0'
        className='resume-preview'
        onClick={() => setShowPopup(true)}
        onKeyDown={() => {}}
      >
        <ZResumePreview data={data} />
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
  data: PropTypes.object,
}

export default ResumeThumbnail
