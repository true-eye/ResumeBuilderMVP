import Degrees from './degrees'
import JobTitles from './jobTitles'
import FieldOfStudies from './fieldofstudies'
import Skills from './skills'
import Summarizes from './summaries'

const toArray = obj => Object.keys(obj).map(key => obj[key])

const JobTitlesArray = toArray(JobTitles)
const FieldOfStudiesArray = toArray(FieldOfStudies)

export {
  Degrees,
  JobTitles,
  JobTitlesArray,
  FieldOfStudies,
  FieldOfStudiesArray,
  Skills,
  Summarizes,
}
