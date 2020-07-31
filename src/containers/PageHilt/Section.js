import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { completeStepAction, saveStepAction } from 'actions/resume'
import TipContainer from 'containers/TipContainer'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { TipContentHilt } from 'containers/TipContainer/Contents'
import {
  ZButton,
  ZButtonGroupFooter,
  ZArraySkills,
  ZExamplesWrapper,
  ZRelatedJobTitles,
} from 'components/themes.js'
import { JobTitlesArray } from 'utils/constants/index'
import axios from 'axios'
import { useQuery } from 'react-query'
import './Section.scss'

/**
 * @page
 * @route /resume/section/hilt
 * @subpage Skills Page
 *
 *
 * shows all skills as a list (addable, deletable, editable, score)
 *
 * @version 0.0.1
 */

const schema = yup.object({
  skills: yup
    .array()
    .of(yup.object({ title: yup.string().required('Please type here or remove') })),
})

const getExamplesBySearch = async (key, search) => {
  const { data } = await axios.get(
    `https://api-embeddedbuilder.zety.com/api/v1/content/texttunercontent?user_uid=eb85afb9-8a24-4eb6-9dcc-b0106bd57139&sectionTypeCD=HILT&productCD=RWZ&Jobtitle=${search}&searchItemType=jobTitle&documentID=5760c460-28cf-41fb-a215-0dc2f8e80b45&cultureCD=en-US&enableFuzzySearch=false&includeKGSkills=false`,
  )
  return data
}

function useSearch(search) {
  return useQuery(['HILT', search], getExamplesBySearch, {
    enabled: search,
  })
}

const PageHiltSection = () => {
  const info = useSelector(state => state.resume.info)
  const experience = info.expr && info.expr[0] ? info.expr[0] : {}
  const [previous, setPrevious] = useState({})
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0)
  const [search, setSearch] = useState(experience ? experience.position : '')
  const [selected, setSelect] = useState(experience ? experience.position : '')
  const dispatch = useDispatch()
  const history = useHistory()

  const onBack = () => {
    history.push('/resume/tips/hilt')
  }

  const formik = useFormik({
    initialValues: {
      skills: info.hilt,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log('onSubmit', values)

      dispatch(saveStepAction('hilt', values.skills))
      dispatch(completeStepAction('hilt'))
      history.push('/resume/tips/summ')
    },
  })

  const onNext = e => {
    formik.handleSubmit()
  }

  const { status, data, error, isFetching } = useSearch(selected)

  let examples = {}

  if (status !== 'loading' && status !== 'error') {
    data && data.result
      ? data.result.forEach(item => {
          examples[item.contentItemUID] = item
        })
      : {}
  } else if (status === 'loading') {
    examples = previous
  }

  const onSelectExample = UID => {
    const skills = formik.values ? formik.values.skills : []
    const lastSkill = skills.length >= 0 ? skills[skills.length - 1] : {}

    if (!skills.length || lastSkill.title.length) {
      formik.setValues({ skills: [...skills, { score: 0, title: examples[UID].text }] })
    } else {
      formik.setValues({
        skills: [
          ...skills.slice(0, skills.length - 1),
          { ...lastSkill, title: examples[UID].text },
        ],
      })
    }
  }

  const currentJobTitle = JobTitlesArray.find(job => job.title === search)
  const relatedJobTitles = currentJobTitle ? currentJobTitle.relatedJobTitles : []

  const updatedResume = { ...info, hilt: formik.values.skills }

  return (
    <Container className='section-hilt'>
      <Row className='page-title-wrap'>
        <Col xs={9} className='col-page-title'>
          <h1 className='page-title'>What skills do you want to highlight?</h1>
          <p className='sub-title'>
            Get help writing your bullet points with the pre-written examples below.
          </p>
        </Col>
        <Col xs={3} className='col-preview-tips'>
          <TipContainer info={updatedResume}>
            <TipContentHilt />
          </TipContainer>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
          <Form noValidate>
            <ZArraySkills formik={formik} field='skills' label='skills' />
          </Form>
        </Col>
        <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
          <ZExamplesWrapper
            search={search}
            searchFor={selected}
            searchPlaceholder='Ex: Cashier'
            setSearch={setSearch}
            loading={status === 'loading'}
            setSelect={newValue => {
              setPrevious(examples)
              setSelect(newValue)
              setCurrentJobTitleIndex(0)
            }}
            searchList={JobTitlesArray}
            examples={examples}
            onSelectExample={onSelectExample}
            nRecommend={4}
          />
        </Col>
      </Row>
      <ZRelatedJobTitles
        label={`More job titles like ${selected}`}
        current={currentJobTitleIndex}
        jobTitles={relatedJobTitles}
        onSelect={index => {
          setSelect(relatedJobTitles[index])
          setSearch(relatedJobTitles[index])
          setCurrentJobTitleIndex(index)
        }}
      />
      <ZButtonGroupFooter>
        <ZButton variant='default' onClick={onBack}>
          Back
        </ZButton>
        <ZButton variant='primary' onClick={onNext}>
          NEXT: SUMMARY
        </ZButton>
      </ZButtonGroupFooter>
    </Container>
  )
}

PageHiltSection.propTypes = {}

export default PageHiltSection
