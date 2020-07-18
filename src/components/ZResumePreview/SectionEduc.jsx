import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const SectionEduc = ({ highlight }) => {
  return (
    <div
      id='SECTION_EDUC9865a64b-ff0f-4eab-941d-1918ff23910b'
      className={classnames('section', 'education', 'SECTION_EDUC', 'noparagraph', 'multi-para', {
        'preview-template-highlighter': highlight,
      })}
      data-section-cd='EDUC'
    >
      <div className=' doc-item'>
        <div className='heading'>
          <div className='sectiontitle' id='SECTIONNAME_EDUC'>
            Education<span className='rename-section text-rename'> </span>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <div
              id='PARAGRAPH_EDUC_0'
              className='paragraph datespara PARAGRAPH_EDUC firstparagraph placeholder-text '
            >
              <div className='clearfix doc-item'>
                <div className='singlecolumn'>
                  <div className='paddedline date-content'>
                    <span className='jobdates' id='FIELD_GRST' format='%Y-%m'></span>
                    <span className='jobdates' id='FIELD_GRED' format='%Y-%m'></span>
                  </div>
                  <span className='paddedline degreeGap txtBold' dependency='DGRE|STUY'>
                    <span className='degree' id='FIELD_DGRE'>
                      Bachelor of Arts
                    </span>
                    <span dependency='DGRE+STUY'>: </span>
                    <span className='programline' id='FIELD_STUY'>
                      Business Administration
                    </span>
                  </span>
                  <div className='paddedline txtItl' dependency='SCIT|SSTA|SCHO'>
                    <span className='companyname' id='FIELD_SCHO'>
                      San Francisco State University
                    </span>
                    <span dependency='SCHO+SSTA|SCIT'> - </span>
                    <span className='joblocation jobcity' id='FIELD_SCIT'>
                      San Francisco
                    </span>
                    <span dependency='SCIT+SSTA'>, </span>
                    <span className='joblocation jobstate' id='FIELD_SSTA'>
                      CA
                    </span>
                  </div>

                  <span className='field' id='FIELD_FRFM'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionEduc.propTypes = {
  highlight: PropTypes.bool,
}

export default SectionEduc
