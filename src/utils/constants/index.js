import Degrees from './degrees'
import JobTitles from './jobTitles'
import FieldOfStudies from './fieldofstudies'
import Skills from './skills'
import Summarizes from './summaries'
import Accomplishments from './accomplishments'
import Affiliations from './affiliations'
import Certifications from './certifications'

const toArray = obj => Object.keys(obj).map(key => obj[key])

const JobTitlesArray = toArray(JobTitles)
const FieldOfStudiesArray = toArray(FieldOfStudies)
const MorePages = ['accm', 'afil', 'addi', 'sftr', 'lang', 'cert', 'intr', 'cust']

const GetNextSection = (more, current) => {
  // Get next available page in MorePages
  let index = MorePages.findIndex(tag => tag === current) + 1

  while (index < MorePages.length) {
    if (more[MorePages[index]]) return MorePages[index]
    index++
  }
  return 'final'
}

const GetPrevSection = (more, current) => {
  // Get previous available page in MorePages
  let index = MorePages.findIndex(tag => tag === current) - 1

  while (index >= 0) {
    if (more[MorePages[index]]) return MorePages[index]
    index--
  }
  return 'add-section'
}

export {
  Degrees,
  JobTitles,
  JobTitlesArray,
  FieldOfStudies,
  FieldOfStudiesArray,
  Skills,
  Summarizes,
  MorePages,
  GetPrevSection,
  GetNextSection,
  Accomplishments,
  Affiliations,
  Certifications,
}
