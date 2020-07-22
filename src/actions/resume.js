import { RESUME } from './types'

export const saveStepAction = (field, value) => ({
  type: RESUME.SAVE_STEP,
  field,
  value,
})

export const completeStepAction = field => ({
  type: RESUME.COMPLETE_STEP,
  field,
})

export const initAction = () => ({ type: RESUME.INIT })
