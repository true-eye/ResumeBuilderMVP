/* eslint-disable complexity */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

/**
 * @component
 * @param {number}    index
 * @param {object}    item
 * @param {function}  onAddDescription
 *
 * @todo
 * Add a Description button event trigger
 *
 * @version 0.0.1
 */

const ItemRendererEduc = ({ item, index, onAddDescription }) => {
  const { position, company, jobcity, jobstate, startDate, endDate, currentJob, description } = item

  const start = startDate ? moment(startDate).format('YYYY') : null
  const end = currentJob ? 'Current' : endDate ? moment(endDate).format('YYYY') : null
  const emptyDates = !start && !end
  const emptyLocation = (!jobcity || !jobcity.length) && (!jobstate || !jobstate.length)

  console.log(item)

  const renderJob = (
    <>
      {position}
      {position && position.length && company && company.length ? <span>,&nbsp;</span> : ''}
      {company}
    </>
  )

  const renderLocation = (
    <>
      {jobcity}
      {jobcity && jobcity.length && jobstate && jobstate.length ? <span>,&nbsp;</span> : ''}
      {jobstate}
    </>
  )

  const renderDates = !emptyDates && (
    <>
      {start} {end && <span>-</span>} {end}
    </>
  )

  return (
    <>
      <div className='para-head'>
        <span className={classnames('para-count', `para-count-${index % 3}`)}>{index + 1}</span>
        <h5 className='para-title h5'>{renderJob}</h5>
        <p className='para-s-title'>
          {renderLocation}
          &nbsp;
          {!emptyLocation && !emptyDates ? <span className='v-divider'>|</span> : ''}
          &nbsp;
          {renderDates}
        </p>
      </div>
      {description && description.length ? (
        <div
          className='para-info bottom-shadow'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        <div className='para-info'>
          <button id='linkAddDescription' className='btn btn-link'>
            <FontAwesomeIcon icon={faPlusCircle} />
            &nbsp;ADD A DESCRIPTION
          </button>
        </div>
      )}
    </>
  )
}

ItemRendererEduc.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  onAddDescription: PropTypes.func,
}

export default ItemRendererEduc
