import React from 'react'
import PropTypes from 'prop-types'
import { ZSearch, ZLoaderNew, ZExamplesGroup } from 'components/themes.js'
import './index.scss'

/**
 * @component
 *
 *
 * @version 0.0.1
 */

const ZExamplesWrapper = ({
  search,
  searchFor,
  searchPlaceholder,
  setSearch,
  tooltip,
  searchList,
  examples,
  onSelectExample,
  nRecommend,
}) => {
  return (
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
        <ZExamplesGroup examples={examples} onSelect={onSelectExample} nRecommend={nRecommend} />
        <ZLoaderNew loading={false} />
      </section>
    </section>
  )
}

ZExamplesWrapper.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  examples: PropTypes.object,
  nRecommend: PropTypes.number,
  searchFor: PropTypes.string,
  tooltip: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  searchList: PropTypes.array,
  onSelectExample: PropTypes.func,
}

export default ZExamplesWrapper
