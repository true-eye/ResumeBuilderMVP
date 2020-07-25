import React from 'react'
import PropTypes from 'prop-types'

/**
 * @component
 * @param {string}    CITY
 * @param {string}    STAT
 * @param {string}    ZIPC
 * @param {string}    HPHN
 * @param {string}    EMAI
 *
 * In case of all fields are empty, it shows the placeholder ones
 *
 * @version 0.0.1
 */

const SectionContact = ({ CITY = '', STAT = '', ZIPC = '', HPHN = '', EMAI = '' }) => {
  const emptyAddr = !CITY.length && !STAT.length && !ZIPC.length
  const emptyPhone = !HPHN.length
  const emptyEmail = !EMAI.length
  const emptyAll = emptyAddr && emptyPhone && emptyEmail

  const fields = emptyAll
    ? {
        CITY: 'San Francisco',
        STAT: 'CA',
        ZIPC: '94105',
        HPHN: '415-555-5555',
        EMAI: 'resumesample@example.com',
      }
    : {
        CITY,
        STAT,
        ZIPC,
        HPHN,
        EMAI,
      }

  const renderAddr = () => {
    if (emptyAddr && !emptyAll) return ''

    return (
      <>
        <div className='txtBold'>Address </div>
        {/* <div className='field' id='FIELD_STRT'></div> */}
        <span className='field' id='FIELD_CITY'>
          {fields.CITY}
        </span>
        <span dependency='CITY+STAT|ZIPC'>
          {fields.CITY.length && (fields.STAT.length || fields.ZIPC.length) ? ', ' : ''}
        </span>
        <span className='field' id='FIELD_STAT'>
          {fields.STAT}
        </span>
        <span dependency='STAT+ZIPC'>{fields.STAT.length && fields.ZIPC.length ? ', ' : ''}</span>
        <span className='field' id='FIELD_ZIPC'>
          {fields.ZIPC}
        </span>
      </>
    )
  }

  const renderPhone = () => {
    if (emptyPhone && !emptyAll) return ''

    return (
      <>
        <div className='txtBold mt5'>Phone </div>
        <div>
          <span className='field' id='FIELD_HPHN'>
            {fields.HPHN}
          </span>
        </div>
      </>
    )
  }

  const renderEmail = () => {
    if (emptyEmail && !emptyAll) return ''

    return (
      <>
        <div className='txtBold mt5'>E-mail </div>
        <div className='word-break'>
          <span className='field' id='FIELD_EMAI'>
            {fields.EMAI}
          </span>
        </div>
      </>
    )
  }

  return (
    <div className='section SECTION_CNTC notdraggable   ' data-section-cd='CNTC'>
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_CNTC'>
            Contact<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <div className='paragraph PARAGRAPH_CNTC firstparagraph  '>
              <div className='clearfix doc-item'>
                <div className='address'>
                  <div className='singlecolumn'>
                    {renderAddr()}
                    {renderPhone()}
                    {renderEmail()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionContact.propTypes = {
  CITY: PropTypes.string,
  STAT: PropTypes.string,
  ZIPC: PropTypes.string,
  HPHN: PropTypes.string,
  EMAI: PropTypes.string,
}

export default SectionContact
