import { all, fork } from 'redux-saga/effects'
import resume from './resume'

export default function* rootSaga() {
  yield all([fork(resume)])
}
