import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

const CertItem = ({ item }) => {
  const { date, title } = item

  return (
    <div className='paragraph datespara PARAGRAPH_CERT firstparagraph  '>
      <div className='clearfix doc-item'>
        <div className='paddedline date-content hidedates'>
          <span className='jobdates'>2007-03</span>
        </div>
        <div className='singlecolumn'>
          <div className='paddedline date-content'>
            <span className='jobdates' id='FIELD_DATE'>
              {moment(date).format('YYYY-MM')}
            </span>
          </div>
          <span className='paddedline field' id='FIELD_FRFM'>
            <p>{title}</p>
          </span>
        </div>
      </div>
      <div className='doc-overlay para-overlay'>
        <span className='badge badge-primary badge-edit'></span>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

const SectionCert = ({ cert = [] }) => {
  return (
    <div
      className={classnames('section', 'education', 'SECTION_CERT', 'noparagraph', 'multi-para')}
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_CERT'>
            Certification<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className=''>
            {cert.map((item, index) => (
              <CertItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SectionCert.propTypes = {
  highlight: PropTypes.bool,
  cert: PropTypes.array,
}

export default SectionCert
