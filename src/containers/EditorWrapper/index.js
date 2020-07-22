import React from 'react'
import { ZSearch, ZLoaderNew, ZExamplesGroup } from 'components/themes.js'
import PropTypes from 'prop-types'
import { ContentState, EditorState, convertFromHTML, Modifier, Editor } from 'draft-js'
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
  searchList,
  editorState,
  setEditorState,
  examples,
  nRecommend,
  searchFor,
  tooltip,
  searchPlaceholder,
  editorPlaceholder,
}) => {
  const currentContent = editorState.getCurrentContent()

  const onSelectExample = UID => {
    const currentSelection = editorState.getSelection()

    if (examples[UID]) {
      const blocksFromHTML = convertFromHTML(`<li>${examples[UID].text}</li><li />`)
      const insertingContentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      )
      const newContent = Modifier.replaceWithFragment(
        currentContent,
        currentSelection,
        insertingContentState.getBlockMap(),
      )

      const newEditorState = EditorState.push(editorState, newContent, 'insert-fragment')
      setEditorState(newEditorState)
    }
  }

  return (
    <div className='editor-wrapper'>
      <section className='editor-section ' id='draftJsEditor'>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder={editorPlaceholder}
          spellCheck
          nRecommend={nRecommend}
        />
      </section>

      <section className='examples-wrapper'>
        <header className='header-examples'>
          {search !== undefined && (
            <ZSearch
              value={search}
              maxLength={35}
              label={
                <>
                  Showing results for <span className='keyword'>{searchFor}</span>
                </>
              }
              id='positionSearchBox'
              name='positionSearchBox'
              placeholder={searchPlaceholder}
              onChange={(e, { newValue }) => setSearch(newValue)}
              tooltip={tooltip}
              list={searchList}
              field='title'
            />
          )}
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
  editorState: PropTypes.object,
  setEditorState: PropTypes.func,
  examples: PropTypes.object,
  nRecommend: PropTypes.number,
  searchFor: PropTypes.string,
  tooltip: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  editorPlaceholder: PropTypes.string,
  searchList: PropTypes.array,
}

export default EditorWrapper
