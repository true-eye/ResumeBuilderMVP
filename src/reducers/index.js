import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import resume from './resume'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['resume'],
}

const appReducer = asyncReducers =>
  persistReducer(
    persistConfig,
    combineReducers({
      resume: resume,
      ...asyncReducers,
    }),
  )

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers)
}

export default rootReducer
