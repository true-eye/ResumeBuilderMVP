import React from 'react'
import PropTypes from 'prop-types'
import LeftBox from './LeftBox'
import RightBox from './RightBox'
import './index.scss'

/**
 * @component
 * @param {object}    data        (resume info)
 * @param {string}    highlight   (highlighted setion name: expr | )
 *
 * @version 0.0.1
 */

const ZResumePreview = ({ data = {}, highlight }) => {
  return (
    <div
      id='document'
      className='document fontsize fontface vmargins hmargins pagesize skn-srz1 SRZ1  ZTY'
    >
      <div id='CONTAINER_PARENT_0' className='parentContainer'>
        <LeftBox data={data} />
        <RightBox data={data} highlight={highlight} />
      </div>
    </div>
  )
}

ZResumePreview.propTypes = {
  data: PropTypes.object,
  highlight: PropTypes.string,
}

export default ZResumePreview
