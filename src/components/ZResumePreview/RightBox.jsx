import React from 'react'
import PropTypes from 'prop-types'
import SectionSummary from './SectionSummary'
import SectionExpr from './SectionExpr'
import SectionEduc from './SectionEduc'
import SectionMarkup from './SectionMarkup'
import SectionCert from './SectionCert'
import SectionIntr from './SectionIntr'

const SectionContainer = ({ children }) => {
  return (
    <div className='sortable-item section-container SortableItem-sibling'>
      <div className='document-tool sec-tool' id='editIcons'></div>
      {children}
    </div>
  )
}

const RightBox = ({ info = {}, highlight }) => {
  const expr = info.expr
  const educ = info.educ
  const summ = info.summ

  const cert = info.fnlz.cert || []
  const intr = info.fnlz.intr || []

  return (
    <div id='CONTAINER_1' className='right-box'>
      <SectionContainer>
        <SectionSummary summ={summ} highlight={highlight === 'summ'} />
      </SectionContainer>
      <SectionContainer>
        <SectionExpr expr={expr} highlight={highlight === 'expr'} />
      </SectionContainer>
      <SectionContainer>
        <SectionEduc educ={educ} highlight={highlight === 'educ'} />
      </SectionContainer>
      {info.more.accm && (
        <SectionContainer>
          <SectionMarkup markup={info.fnlz.accm} label='Accomplishments' />
        </SectionContainer>
      )}
      {info.more.afil && (
        <SectionContainer>
          <SectionMarkup markup={info.fnlz.afil} label='Affiliations' />
        </SectionContainer>
      )}
      {info.more.addi && (
        <SectionContainer>
          <SectionMarkup markup={info.fnlz.addi} label='Additional Information' />
        </SectionContainer>
      )}
      {info.more.cert && (
        <SectionContainer>
          <SectionCert cert={cert} />
        </SectionContainer>
      )}
      {info.more.intr && (
        <SectionContainer>
          <SectionIntr intr={intr} />
        </SectionContainer>
      )}
      {info.more.cust && (
        <SectionContainer>
          <SectionMarkup markup={info.fnlz.cust} label={info.more.cust} />
        </SectionContainer>
      )}
    </div>
  )
}

RightBox.propTypes = {
  info: PropTypes.object,
  highlight: PropTypes.string,
}

export default RightBox
