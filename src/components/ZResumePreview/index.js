import React from 'react'
import PropTypes from 'prop-types'
import LeftBox from './LeftBox'
import RightBox from './RightBox'
import './index.scss'

const ZResumePreview = ({ data = {} }) => {
  return (
    <div
      id='document'
      className='document fontsize fontface vmargins hmargins pagesize skn-srz1 SRZ1  ZTY'
    >
      <div id='CONTAINER_PARENT_0' className='parentContainer'>
        <LeftBox data={data} />
        <RightBox data={data} />
      </div>
    </div>
  )
}

ZResumePreview.propTypes = {
  data: PropTypes.object,
}

export default ZResumePreview
