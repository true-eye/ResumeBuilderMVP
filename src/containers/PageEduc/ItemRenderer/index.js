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
  const {
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

  const start = startDate ? moment(startDate).format('YYYY') : null
  const end = currentlyAttending ? 'Current' : endDate ? moment(endDate).format('YYYY') : null
  const emptyDates = !start && !end

  const len = str => (str ? str.length : 0)

  const renderDates = !emptyDates && (
    <>
      {start} {end && <span>-</span>} {end}
    </>
  )
  const renderDegree = degree === 'Enter a different degree' ? cdegree : degree

  return (
    <>
      <div className='para-head'>
        <span className={classnames('para-count', `para-count-${index % 3}`)}>{index + 1}</span>
        <h5 className='para-title h5'>
          {renderDegree} {len(renderDegree) && len(renderDates) ? <span> - </span> : ''}{' '}
          {renderDates}
        </h5>
        {len(school) && <p className='para-s-title'>{school}</p>}
        {len(location) && <p className='para-s-title'>{location}</p>}
        {len(study) && <p className='para-s-title'>{study}</p>}
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
