/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import ZRatingContainer from '../ZRatingContainer'
import './index.scss'
import ZInput from '../ZInput'

/**
 * @component
 * @param {object}    formik
 *
 * @version 0.0.1
 */

const ZArraySkills = ({ formik }) => {
  return (
    <div className='text-editor-group '>
      <div className='text-editor-inner custom-scroll'>
        <section className='textbox-editor-container'>
          <Row className='add-delete-row'>
            <Col md={4}>
              <ZRatingContainer value={0} />
            </Col>
            <Col md={7} className='pl-0'>
              <ZInput id='0.FRFM' name='0.FRFM' type='text' formik={formik} />
            </Col>
            <FontAwesomeIcon className='delete' icon={faTrashAlt} size='lg' />
          </Row>
        </section>
        <section className='textbox-editor-container'>
          <Row className='add-delete-row'>
            <Col md={4}>
              <ZRatingContainer value={0} />
            </Col>
            <Col md={7} className='pl-0'>
              <ZInput id='1.FRFM' name='1.FRFM' type='text' formik={formik} />
            </Col>
            <FontAwesomeIcon className='delete' icon={faTrashAlt} size='lg' />
          </Row>
        </section>
      </div>
      <a className='add-another'>
        <FontAwesomeIcon icon={faPlus} /> Add one more
      </a>
    </div>
  )
}

ZArraySkills.propTypes = {
  formik: PropTypes.object,
}

export default ZArraySkills
