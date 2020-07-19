import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ZSearch } from 'components/themes.js'
import './index.scss'

/**
 * @component
 *
 *
 * @version 0.0.1
 */

const EditorWrapper = ({}) => {
  const [search, setSearch] = useState('')
  return (
    <div className='editor-wrapper'>
      <textarea id='draftJsEditor' className='editor-section' rows={7} />
      <section className='examples-wrapper'>
        <header className='header-examples'>
          <ZSearch
            value={search}
            maxLength={35}
            label={
              <>
                Showing results for <span className='keyword'>Developer</span>
              </>
            }
            id='positionSearchBox'
            name='positionSearchBox'
            placeholder='Ex: Cashier'
            onChange={(e, { newValue }) => setSearch(newValue)}
            tooltip='Want to see more pre-written examples? Try searching for another title.'
          />
        </header>
      </section>
    </div>
  )
}

EditorWrapper.propTypes = {}

export default EditorWrapper
