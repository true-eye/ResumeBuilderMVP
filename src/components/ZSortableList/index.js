import React from 'react'
import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ZSortableListItem from './item'
import ZButton from '../ZButton'
import './index.scss'

/**
 * @component
 * @param {array}     list
 * @param {function}  onChange
 * @param {function}  onAdd
 * @param {function}  onEdit
 * @param {function}  onDelete
 * @param {function}  onSelect
 * @param {element}   children
 * @param {string}    labelPlus
 *
 * @version 0.0.1
 */

const ZSortableList = ({
  list = [],
  onChange,
  onAdd,
  onEdit,
  onDelete,
  onSelect,
  children,
  labelPlus,
}) => {
  return (
    <section className='sortable-list'>
      <ReactSortable
        className='para-group'
        handle='.dragHandle'
        animation={150}
        list={list}
        setList={onChange}
      >
        {list.map((item, index) => (
          <ZSortableListItem
            key={item.id}
            item={item}
            index={index}
            onSelect={() => onSelect(index)}
            onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)}
          >
            {children}
          </ZSortableListItem>
        ))}
      </ReactSortable>
      <ZButton className='btn-block-add' block onClick={onAdd}>
        <FontAwesomeIcon icon={faPlusCircle} />
        &nbsp; {labelPlus}
      </ZButton>
    </section>
  )
}

ZSortableList.propTypes = {
  list: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  children: PropTypes.node,
  labelPlus: PropTypes.string,
}

export default ZSortableList
