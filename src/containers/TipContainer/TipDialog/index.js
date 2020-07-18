import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const TipDialog = () => {
  return (
    <div className='modal-tip-dialog ' role='tooltip'>
      <div className='modal-tip-content'>
        <div className='modal-tip-header'>
          <a className='close-tip'>
            <FontAwesomeIcon icon={faTimes} color='#d7dde2' />
          </a>
        </div>
        <div className='modal-tip-body'>
          <h5 className='h5 title-tip'>Expert Insights</h5>
          <p>
            Hiring managers will scan this information looking for career progression, i.e.- how
            long you've stayed in each job, your growth and promotions, whether you've worked for
            similar companies and whether you have gaps in employment.
          </p>
          <ul className='list-tips'>
            <li>
              Enter basic information about your previous jobs so employers can see where you've
              worked.
            </li>
            <li>
              Don't abbreviate job titles. Using your full title looks more professional and is
              easier for managers to understand.
            </li>
            <li>
              Include start and end dates for each position. Leaving off dates will make employers
              think you're hiding something.
            </li>
            <li>
              Can't remember your exact start date or job title? Don't worry - enter your best guess
              and come back to edit it later, once you've confirmed the information.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TipDialog
