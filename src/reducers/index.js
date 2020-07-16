import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import example from './example'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const appReducer = asyncReducers =>
  persistReducer(
    persistConfig,
    combineReducers({
      example: example,
      ...asyncReducers,
    }),
  )

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers)
}

export default rootReducer
