import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ZSortableListItem from './item'
import './index.scss'
import ZButton from '../ZButton'

/**
 * @component
 * @param {bool}    loading
 * @param {object}  style
 *
 * @version 0.0.1
 */

const defs = { chosen: false, filtered: false, selected: false }

/** Generates uniquie id's for each item when generated */
export const threes = [
  { id: 0, name: 'shrek', ...defs },
  { id: 1, name: 'fiona', ...defs },
  { id: 2, name: 'donkey', ...defs, selected: true, filtered: true },
  { id: 3, name: 'Lord Faarquad', ...defs },
]

const expr = [
  {
    id: 1,
    position: 'Software Developer',
    company: 'Acme Brick',
    jobcity: 'San Ardo',
    jobstate: 'CA',
    startDate: moment('2016-12-25').format(),
    endDate: moment('2019-12-25').format(),
    currentJob: true,
    description:
      'Partnered with team members, including <span class="ttc_token" style="color:#0000ff">[Job title]</span>s and <span class="ttc_token" style="color:#0000ff">[Job title]</span>s to minimize project delays.',
  },
  {
    id: 2,
    position: 'Customer Service Cashier',
    company: 'Lets Corp',
    jobcity: '',
    jobstate: '',
    startDate: moment('2012-12-25').format(),
    endDate: moment('2013-12-25').format(),
    currentJob: false,
    // description:
    // '<ul><li>Collaborated with IT team and other support staff to develop new applications.</li><li>Collaborated with IT team and other support staff to develop new applications.</li></ul>',
  },
]

const ZSortableList = ({ loading, style }) => {
  const [list, setList] = useState(expr)

  return (
    <section className='sortable-list'>
      <ReactSortable
        className='para-group'
        handle='.dragHandle'
        animation={150}
        list={list}
        setList={() => console.log('setList')}
      >
        {list.map((item, index) => (
          <ZSortableListItem key={item.id} item={item} index={index} />
        ))}
      </ReactSortable>
      <ZButton className='btn-block-add' block>
        <FontAwesomeIcon icon={faPlusCircle} />
        &nbsp; ADD ANOTHER POSITION
      </ZButton>
    </section>
  )
}

ZSortableList.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.object,
}

export default ZSortableList
