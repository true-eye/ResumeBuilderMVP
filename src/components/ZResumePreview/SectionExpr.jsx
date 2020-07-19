import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

const ExprItem = ({ item }) => {
  const {
    id,
    position,
    company,
    jobcity,
    jobstate,
    startDate,
    endDate,
    currentJob,
    description,
  } = item

  const start = startDate ? moment(startDate).format('YYYY-MM') : null
  const end = currentJob ? 'Current' : endDate ? moment(endDate).format('YYYY-MM') : null
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
  const showHeader = ln(company) || ln(jobstate) || ln(jobcity)

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
          {position && (
            <span className='paddedline'>
              <span className='jobtitle txtBold' id='FIELD_JTIT'>
                {position}
              </span>
            </span>
          )}
          {showHeader && (
            <span className='paddedline locationGap txtItl'>
              <span className='companyname' id='FIELD_COMP'>
                {company}
              </span>
              {ln(company) && (ln(jobcity) || ln(jobstate)) ? (
                <span dependency='COMP+JCIT|JSTA'>, </span>
              ) : (
                ''
              )}
              <span className='jobcity' id='FIELD_JCIT'>
                {jobcity}
              </span>
              {ln(jobcity) && ln(jobstate) ? <span dependency='JCIT+JSTA'>, </span> : ''}
              <span className='jobstate' id='FIELD_JSTA'>
                {jobstate}
              </span>
            </span>
          )}

          <span className='jobline' id='FIELD_JDES'>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </span>
        </div>
      </div>
    </div>
  )
}

const SectionExpr = ({ highlight, expr = [] }) => {
  return (
    <div
      className={classnames('section', 'experience', 'SECTION_EXPR', 'noparagraph', 'multi-para', {
        'preview-template-highlighter': highlight,
      })}
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle'>
            Work History<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className='sortableInner'>
            {expr.map((item, index) => (
              <ExprItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SectionExpr.propTypes = {
  highlight: PropTypes.bool,
  expr: PropTypes.array,
}

export default SectionExpr
