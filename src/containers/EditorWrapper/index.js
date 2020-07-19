import React, { useState } from 'react'
import { ZSearch, ZLoaderNew, ZExamplesGroup } from 'components/themes.js'
import { Editor, EditorState } from 'draft-js'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @component
 *
 *
 * @version 0.0.1
 */

const EditorWrapper = ({
  search,
  setSearch,
  editorState,
  setEditorState,
  examples,
  onSelectExample,
}) => {
  return (
    <div className='editor-wrapper'>
      <section className='editor-section ' id='draftJsEditor'>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder='Type your achievements and responsibilities here'
          spellCheck
        />
      </section>

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
        <section className='body-examples custom-scroll'>
          <ZExamplesGroup examples={examples} onSelect={onSelectExample} />
          <ZLoaderNew loading={false} />
        </section>
      </section>
    </div>
  )
}

EditorWrapper.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
}

export default EditorWrapper
