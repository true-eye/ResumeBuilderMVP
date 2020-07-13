import { EXAMPLE } from './types'

export const loadAction = name => ({
  type: EXAMPLE.GET_REQUEST,
  name,
})
