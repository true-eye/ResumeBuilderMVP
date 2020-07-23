/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import ZInput from '../ZInput'
import './index.scss'

/**
 * @component
 * @param {object}    formik
 *
 * @version 0.0.1
 */

const ZArrayInterests = ({ formik, field }) => {
  const list = formik.values ? formik.values[field] : []

  const onAdd = () => {
    formik.setValues({ [field]: [...list, ''] })
  }

  const onRemove = index => {
    formik.setValues({ [field]: [...list.slice(0, index), ...list.slice(index + 1)] })
  }

  const disableAdd = list.length > 0 && !list[list.length - 1].length

  return (
    <div className='text-editor-group '>
      <div className='text-editor-inner custom-scroll'>
        {list.map((skill, index) => (
          <section key={index} className='textbox-editor-container'>
            <Row className='add-delete-row'>
              <Col md={11} className='pl-0'>
                <ZInput
                  id={`${field}.${index}`}
                  name={`${field}.${index}`}
                  type='text'
                  formik={formik}
                />
              </Col>
              <FontAwesomeIcon
                className='delete'
                icon={faTrashAlt}
                size='lg'
                onClick={() => onRemove(index)}
              />
            </Row>
          </section>
        ))}
      </div>
      <a
        className={classnames('add', {
          'add-another': list.length > 0,
          disabled: disableAdd,
        })}
        onClick={() => !disableAdd && onAdd()}
      >
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;
        {list.length > 0 ? 'Add one more' : 'Add your interests here'}
      </a>
    </div>
  )
}

ZArrayInterests.propTypes = {
  formik: PropTypes.object,
  field: PropTypes.string,
}

export default ZArrayInterests
