import React, { useState } from 'react'
import { ZSearch, ZLoaderNew } from 'components/themes.js'
import classnames from 'classnames'
import './index.scss'

/**
 * @component
 *
 *
 * @version 0.0.1
 */

const examples = [
  {
    contentItemUID: '02e95cbe-f7e8-e811-8607-281878761e1e',
    text:
      'Analyzed requirements and designed, developed and implemented software applications for multiple websites.',
  },
  {
    contentItemUID: 'ca8681ac-cd4c-e911-80f4-2818787aff86',
    text: 'Adjusted software parameters to boost performance and incorporate new features.',
  },
  {
    contentItemUID: 'c66e22c3-8d0a-e811-80c2-0003ffb4bfdc',
    text: 'Designed, implemented and monitored web pages and sites for continuous improvement.',
  },
  {
    contentItemUID: 'cc3369c7-f010-e811-80c2-0003ffb4c40f',
    text:
      'Developed programs from ground up using measured, market-focused approach to eliminate waste and streamline implementation cycle.',
  },
  {
    contentItemUID: '2dbf5b2c-7033-e811-80c2-0003ffb4c521',
    text: 'Collaborated with IT team and other support staff to develop new applications.',
  },
  {
    contentItemUID: '8a87c6c7-d00e-e811-80c2-0003ffb4c24e',
    text:
      'Partnered with team members, including <span class="ttc_token" style="color:#0000ff">[Job title]</span>s and <span class="ttc_token" style="color:#0000ff">[Job title]</span>s to minimize project delays.',
  },
]

const EditorWrapper = () => {
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
        <section className='body-examples custom-scroll'>
          <ul className='examples-group'>
            {examples.map((example, index) => (
              <li
                key={example.contentItemUID}
                className={classnames('examples-item animate-up', {
                  'expert-recommended': index < 2,
                })}
              >
                <div className='example-icon'>
                  <button
                    type='button'
                    className='btn-icon btn-icon-primary rounded-circle  js-addttc'
                  />
                </div>
                <div className='example-text' dangerouslySetInnerHTML={{ __html: example.text }} />
              </li>
            ))}
          </ul>
          <ZLoaderNew loading={false} />
        </section>
      </section>
    </div>
  )
}

EditorWrapper.propTypes = {}

export default EditorWrapper
