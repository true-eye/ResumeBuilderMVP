import { RESUME } from 'actions/types'

const initialState = {
  completed: {
    cntc: false,
    expr: false,
    educ: false,
    hilt: false,
    summ: false,
    fnlz: false,
  },
  info: {
    cntc: {
      FNAM: '',
      LNAM: '',
      DCTL: '',
      CITY: '',
      STAT: '',
      ZIPC: '',
      HPHN: '',
      EMAI: '',
    },
    expr: [],
  },
}

function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case RESUME.SAVE_STEP:
      if (action.field === 'expr') {
        return {
          ...state,
          info: {
            ...state.info,
            [action.field]: [...action.value],
          },
        }
      }

      return {
        ...state,
        info: {
          ...state.info,
          [action.field]: {
            ...action.value,
          },
        },
      }
    case RESUME.COMPLETE_STEP:
      return {
        ...state,
        completed: {
          [action.field]: true,
        },
      }
    default: {
      return state
    }
  }
}

export default resumeReducer
