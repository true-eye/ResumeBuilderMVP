import { EXAMPLE } from 'actions/types'

const initialState = {
  loading: false,
}

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE.GET_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default: {
      return state
    }
  }
}

export default exampleReducer
