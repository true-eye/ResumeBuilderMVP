/* eslint-disable complexity */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ZButton from '../ZButton'
import './item.scss'

/**
 * @component
 * @param {number}    index
 * @param {object}    item
 * @param {function}  onEdit
 * @param {function}  onDelete
 * @param {function}  onSelect
 * @param {element}   children
 *
 * @todo
 * Add a Description button event trigger
 *
 * @version 0.0.1
 */

const ZSortableListItem = ({ item, index, onEdit, onDelete, onSelect, children }) => {
  const { id } = item

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      <div className='para-item' key={id} onClick={onSelect}>
        {React.Children.map(children, child => React.cloneElement(child, { index, item }))}

        <div className='para-toolbar'>
          <button onClick={onEdit}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            onClick={e => {
              console.log('onDelete')
              e.stopPropagation()
              setShowDeleteModal(true)
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button>
            <FontAwesomeIcon className='dragHandle' icon={faArrowsAlt} />
          </button>
        </div>
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
    </>
  )
}

ZSortableListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  children: PropTypes.node,
}

export default ZSortableListItem
