import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

const EducItem = ({ item }) => {
  const {
    id,
    school,
    location,
    degree,
    cdegree,
    study,
    startDate,
    endDate,
    currentlyAttending,
    description,
  } = item

  const start = startDate ? moment(startDate).format('YYYY-MM') : null
  const end = currentlyAttending ? 'Current' : endDate ? moment(endDate).format('YYYY-MM') : null
  const idegree = degree === 'Enter a different degree' ? cdegree : degree
  const emptyDates = !start && !end

  const renderDates = !emptyDates && (
    <div className='paddedline date-content'>
      <span className='jobdates' id='FIELD_JSTD'>
        {start}
      </span>
      <span> - </span>
      <span className='jobdates' id='FIELD_EDDT'>
        {end}
      </span>
      <br />
    </div>
  )
  const ln = str => (str && str.length ? true : false)

  const renderDegree =
    ln(idegree) || ln(study) ? (
      <span className='paddedline degreeGap txtBold' dependency='DGRE|STUY'>
        <span className='degree' id='FIELD_DGRE'>
          {idegree}
        </span>
        {ln(idegree) && ln(study) ? <span dependency='DGRE+STUY'>: </span> : ''}
        <span className='programline' id='FIELD_STUY'>
          {study}
        </span>
      </span>
    ) : (
      ''
    )

  const renderLocation =
    ln(school) || ln(location) ? (
      <div className='paddedline txtItl' dependency='SCIT|SSTA|SCHO'>
        <span className='companyname' id='FIELD_SCHO'>
          {school}
        </span>
        {ln(school) && ln(location) ? <span dependency='SCHO+SSTA|SCIT'> - </span> : ''}
        <span className='joblocation jobcity' id='FIELD_SCIT'>
          {location}
        </span>
      </div>
    ) : (
      ''
    )

  return (
    <div
      id='PARAGRAPH_EXPR_0'
      className='paragraph datespara PARAGRAPH_EXPR firstparagraph placeholder-text '
    >
      <div className='clearfix doc-item'>
        <div className='paddedline date-content hidedates' dependency='JSTD|EDDT'>
          <span className='jobdates' dependency='JSTD'>
            2007-03
          </span>
          <span dependency='JSTD+EDDT'> - </span>
          <span className='jobdates' dependency='EDDT'>
            2007-03
          </span>
          <br dependency='JTIT|COMP|JSTA|JCIT' />
        </div>
        <div className='singlecolumn'>
          {renderDates}
          {renderDegree}
          {renderLocation}
          <span className='field' id='FIELD_FRFM'>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </span>
        </div>
      </div>
    </div>
  )
}

const SectionEduc = ({ highlight, educ = [] }) => {
  return (
    <div
      className={classnames('section', 'education', 'SECTION_EDUC', 'noparagraph', 'multi-para', {
        'preview-template-highlighter': highlight,
      })}
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_EDUC'>
            Education<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className=''>
            {educ.map((item, index) => (
              <EducItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SectionEduc.propTypes = {
  highlight: PropTypes.bool,
  educ: PropTypes.array,
}

export default SectionEduc
