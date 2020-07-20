/* eslint-disable complexity */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowsAlt,
  faPencilAlt,
  faTrashAlt,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import ZButton from '../ZButton'
import './item.scss'

/**
 * @component
 * @param {number}    index
 * @param {object}    item
 * @param {function}  onEdit
 * @param {function}  onDelete
 * @param {function}  onSelect
 *
 * @todo
 * Add a Description button event trigger
 *
 * @version 0.0.1
 */

const ZSortableListItem = ({ item, index, onEdit, onDelete, onSelect }) => {
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

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const start = startDate ? moment(startDate).format('YYYY') : null
  const end = currentJob ? 'Current' : endDate ? moment(endDate).format('YYYY') : null
  const emptyDates = !start && !end
  const emptyLocation = (!jobcity || !jobcity.length) && (!jobstate || !jobstate.length)

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
    <div className='para-item' key={id} onClick={onSelect}>
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

      <div className='para-toolbar'>
        <button onClick={onEdit}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button onClick={() => setShowDeleteModal(true)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button>
          <FontAwesomeIcon className='dragHandle' icon={faArrowsAlt} />
        </button>
      </div>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete this entry?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='modal-subtitle'>This can't be undone.</p>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'center' }}>
          <ZButton
            variant='secondary'
            onClick={() => setShowDeleteModal(false)}
            style={{ width: '50%' }}
          >
            CANCEL
          </ZButton>
          <ZButton variant='primary' onClick={onDelete} style={{ width: '50%' }}>
            DELETE
          </ZButton>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ZSortableListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
}

export default ZSortableListItem
