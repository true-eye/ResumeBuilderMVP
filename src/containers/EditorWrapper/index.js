import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ContentState, EditorState, convertFromHTML, Modifier, Editor } from 'draft-js'
import { ZExamplesWrapper } from 'components/themes.js'
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
  setSelect,
  searchList,
  editorState,
  setEditorState,
  examples,
  nRecommend,
  searchFor,
  tooltip,
  searchPlaceholder,
  editorPlaceholder,
  editorOnly = false,
  className,
  loading = false,
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
    <div className={classnames('editor-wrapper', className)}>
      <section className='editor-section ' id='draftJsEditor'>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder={editorPlaceholder}
          spellCheck
        />
      </section>
      {!editorOnly && (
        <ZExamplesWrapper
          search={search}
          searchFor={searchFor}
          searchPlaceholder={searchPlaceholder}
          setSearch={setSearch}
          setSelect={setSelect}
          tooltip={tooltip}
          searchList={searchList}
          examples={examples}
          onSelectExample={onSelectExample}
          nRecommend={nRecommend}
          loading={loading}
        />
      )}
    </div>
  )
}

EditorWrapper.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setSelect: PropTypes.func,
  editorState: PropTypes.object,
  setEditorState: PropTypes.func,
  examples: PropTypes.object,
  nRecommend: PropTypes.number,
  searchFor: PropTypes.string,
  tooltip: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  editorPlaceholder: PropTypes.string,
  searchList: PropTypes.array,
  editorOnly: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
}

export default EditorWrapper
