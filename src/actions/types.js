import { createActionTypes } from 'utils'

export const RESUME = createActionTypes('RESUME', [
  'SAVE_STEP',
  'COMPLETE_STEP',
  'GET_REQUEST',
  'INIT',
])

export default {
  RESUME,
}
