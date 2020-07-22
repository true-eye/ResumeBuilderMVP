import React from 'react'
import PropTypes from 'prop-types'
import LeftBox from './LeftBox'
import RightBox from './RightBox'
import './index.scss'

/**
 * @component
 * @param {object}    info        (resume info)
 * @param {string}    highlight   (highlighted setion name: expr | )
 *
 * @version 0.0.1
 */

const ZResumePreview = ({ info = {}, highlight }) => {
  return (
    <div
      id='document'
      className='document fontsize fontface vmargins hmargins pagesize skn-srz1 SRZ1  ZTY'
    >
      <div id='CONTAINER_PARENT_0' className='parentContainer'>
        <LeftBox info={info} highlight={highlight} />
        <RightBox info={info} highlight={highlight} />
      </div>
    </div>
  )
}

ZResumePreview.propTypes = {
  info: PropTypes.object,
  highlight: PropTypes.string,
}

export default ZResumePreview
