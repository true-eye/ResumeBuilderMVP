import React from 'react'
import { ZButton } from 'components/themes.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ZResumePreview from 'components/ZResumePreview'
import './ResumeThumbnail.scss'

const ResumeThumbnail = () => {
  return (
    <div className='resume-thumbnail'>
      <div className='resume-preview'>
        <ZResumePreview />
      </div>
      <p className='btn-preview-ctnr'>
        <ZButton className='btn-preview'>
          <FontAwesomeIcon icon={faEye} />
          &nbsp; Preview
        </ZButton>
      </p>
    </div>
  )
}

export default ResumeThumbnail
