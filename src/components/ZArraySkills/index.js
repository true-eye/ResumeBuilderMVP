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
import ZRatingContainer from '../ZRatingContainer'
import ZInput from '../ZInput'
import './index.scss'

/**
 * @component
 * @param {object}    formik
 *
 * @version 0.0.1
 */

const ZArraySkills = ({ formik, field }) => {
  const skills = formik.values ? formik.values.skills : []

  const onAdd = () => {
    formik.setValues({ [field]: [...skills, { score: 0, title: '' }] })
  }

  const onRemove = index => {
    formik.setValues({ [field]: [...skills.slice(0, index), ...skills.slice(index + 1)] })
  }

  const onUpdate = (index, key, value) => {
    formik.setValues({
      [field]: [
        ...skills.slice(0, index),
        { ...skills[index], [key]: value },
        ...skills.slice(index + 1),
      ],
    })
  }

  const disableAdd = skills.length > 0 && !skills[skills.length - 1].title.length

  return (
    <div className='text-editor-group '>
      <div className='text-editor-inner custom-scroll'>
        {skills.map((skill, index) => (
          <section key={index} className='textbox-editor-container'>
            <Row className='add-delete-row'>
              <Col md={4}>
                <ZRatingContainer
                  value={skill.score}
                  onChange={value => onUpdate(index, 'score', value)}
                />
              </Col>
              <Col md={7} className='pl-0'>
                <ZInput
                  id={`${field}.${index}.title`}
                  name={`${field}.${index}.title`}
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
          'add-another': skills.length > 0,
          disabled: disableAdd,
        })}
        onClick={() => !disableAdd && onAdd()}
      >
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;
        {skills.length > 0 ? 'Add one more' : 'Add your skills here'}
      </a>
    </div>
  )
}

ZArraySkills.propTypes = {
  formik: PropTypes.object,
  field: PropTypes.string,
}

export default ZArraySkills
