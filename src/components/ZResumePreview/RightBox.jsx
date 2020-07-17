import React from 'react'
import PropTypes from 'prop-types'

const RightBox = ({ data = {} }) => {
  return (
    <div id='CONTAINER_1' className='right-box'>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-SUMM'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <div
          id='SECTION_SUMMa97a3f24-952d-4baf-adf5-6bc5359c9f77'
          className='section summary notdraggable SECTION_SUMM  noparagraph '
          data-section-cd='SUMM'
        >
          <div className=' doc-item'>
            <div className=''>
              <div className=''>
                <div
                  id='PARAGRAPH_SUMM_0'
                  className='paragraph PARAGRAPH_SUMM firstparagraph placeholder-text '
                >
                  <div className='clearfix doc-item'>
                    <div className='field singlecolumn' id='FIELD_FRFM'>
                      Highly motivated Sales Associate with extensive customer service and sales
                      experience. Outgoing sales professional with track record of driving increased
                      sales, improving buying experience and elevating company profile with target
                      market.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-EXPR'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <div
          id='SECTION_EXPR9393b0c1-68c1-44fd-9547-14e2914ac495'
          className='section experience SECTION_EXPR  noparagraph multi-para'
          data-section-cd='EXPR'
        >
          <div className=' doc-item'>
            <div className='heading'>
              <div className='sectiontitle' id='SECTIONNAME_EXPR'>
                Work History<span className='rename-section text-rename'> </span>
              </div>
            </div>
            <div className=''>
              <div className='sortableInner'>
                <div
                  id='PARAGRAPH_EXPR_0'
                  className='paragraph datespara PARAGRAPH_EXPR firstparagraph placeholder-text '
                >
                  <div className='clearfix doc-item'>
                    <div className='paddedline date-content hidedates' dependency='JSTD|EDDT'>
                      <span className='jobdates' dependency='JSTD'>
                        2007-03
                      </span>
                      <span dependency='JSTD+EDDT'> - </span>
                      <span className='jobdates' dependency='EDDT'>
                        2007-03
                      </span>
                      <br dependency='JTIT|COMP|JSTA|JCIT' />
                    </div>
                    <div className='singlecolumn'>
                      <div className='paddedline date-content' dependency='JSTD|EDDT'>
                        <span className='jobdates' id='FIELD_JSTD' format='%Y-%m'>
                          03/2015
                        </span>
                        <span dependency='JSTD+EDDT'> - </span>
                        <span className='jobdates' id='FIELD_EDDT' format='%Y-%m'>
                          Current
                        </span>
                        <br dependency='JTIT|COMP|JSTA|JCIT' />
                      </div>
                      <span className='paddedline' dependency='JTIT'>
                        <span className='jobtitle txtBold' id='FIELD_JTIT'>
                          Senior Sales Associate
                        </span>
                      </span>
                      <span className='paddedline locationGap txtItl' dependency='COMP|JSTA|JCIT'>
                        <span className='companyname' id='FIELD_COMP'>
                          Bed Bath &amp; Beyond, Inc.
                        </span>
                        <span dependency='COMP+JCIT|JSTA'>,</span>
                        <span className='jobcity' id='FIELD_JCIT'>
                          San Francisco
                        </span>
                        <span dependency='JCIT+JSTA'>, </span>
                        <span className='jobstate' id='FIELD_JSTA'>
                          CA
                        </span>
                      </span>

                      <span className='jobline' id='FIELD_JDES'>
                        <ul>
                          <li>
                            Applied security and loss prevention training toward recognizing risks
                            and reducing store theft
                          </li>
                          <li>
                            Trained and developed sales team associates in products, selling
                            techniques and procedures
                          </li>
                          <li>
                            Maintained organized, presentable merchandise to drive continuous sales
                          </li>
                          <li>
                            Implemented up-selling strategies for recommending accessories and
                            complementary purchases
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id='PARAGRAPH_EXPR_-1'
                  className='paragraph datespara PARAGRAPH_EXPR placeholder-text '
                >
                  <div className='clearfix doc-item'>
                    <div className='paddedline date-content hidedates' dependency='JSTD|EDDT'>
                      <span className='jobdates' dependency='JSTD'>
                        2007-03
                      </span>
                      <span dependency='JSTD+EDDT'> - </span>
                      <span className='jobdates' dependency='EDDT'>
                        2007-03
                      </span>
                      <br dependency='JTIT|COMP|JSTA|JCIT' />
                    </div>
                    <div className='singlecolumn'>
                      <div className='paddedline date-content' dependency='JSTD|EDDT'>
                        <span className='jobdates' id='FIELD_JSTD' format='%Y-%m'>
                          06/2013
                        </span>
                        <span dependency='JSTD+EDDT'> - </span>
                        <span className='jobdates' id='FIELD_EDDT' format='%Y-%m'>
                          03/2015
                        </span>
                        <br dependency='JTIT|COMP|JSTA|JCIT' />
                      </div>
                      <span className='paddedline' dependency='JTIT'>
                        <span className='jobtitle txtBold' id='FIELD_JTIT'>
                          Sales Associate
                        </span>
                      </span>
                      <span className='paddedline locationGap txtItl' dependency='COMP|JSTA|JCIT'>
                        <span className='companyname' id='FIELD_COMP'>
                          Target
                        </span>
                        <span dependency='COMP+JCIT|JSTA'>,</span>
                        <span className='jobcity' id='FIELD_JCIT'>
                          San Francisco
                        </span>
                        <span dependency='JCIT+JSTA'>, </span>
                        <span className='jobstate' id='FIELD_JSTA'>
                          CA
                        </span>
                      </span>

                      <span className='jobline' id='FIELD_JDES'>
                        <ul>
                          <li>
                            Maintained organized, presentable merchandise to drive continuous sales
                          </li>
                          <li>
                            Organized racks and shelves to maintain store visual appeal, engage
                            customers and promote merchandise
                          </li>
                          <li>
                            Evaluated inventory and delivery needs, optimizing strategies to meet
                            customer demands
                          </li>
                          <li>
                            Analyzed and processed returns, assisting customers with finding
                            alternative merchandise to meet needs
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  id='PARAGRAPH_EXPR_-2'
                  className='paragraph datespara PARAGRAPH_EXPR placeholder-text '
                >
                  <div className='clearfix doc-item'>
                    <div className='singlecolumn'>
                      <span className='jobline' id='FIELD_JDES'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-react-beautiful-dnd-draggable='1'
        className='sortable-item section-container SortableItem-sibling  data-EDUC'
      >
        <div className='document-tool sec-tool' id='editIcons'></div>
        <div
          id='SECTION_EDUC9865a64b-ff0f-4eab-941d-1918ff23910b'
          className='section education SECTION_EDUC  noparagraph multi-para'
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
      </div>
    </div>
  )
}

RightBox.propTypes = {
  data: PropTypes.object,
}

export default RightBox
