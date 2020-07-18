import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import TipDialog from './TipDialog'
import './index.scss'

const TipContainer = () => {
  return (
    <div id='headerContainerTip' className='container-tip'>
      <a className='dropdown-switcher link btn-preview-link'>
        <FontAwesomeIcon icon={faEye} color='#48a4ff' />
        &nbsp; Preview
      </a>
      <a className='dropdown-switcher link link-v-separator'>
        <FontAwesomeIcon icon={faLightbulb} color='#48a4ff' />
        &nbsp; Tips
      </a>
      <TipDialog />
    </div>
  )
}

export default TipContainer
