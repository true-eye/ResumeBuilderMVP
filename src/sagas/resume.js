import { call, put, takeLatest, all } from 'redux-saga/effects'
import { types } from 'actions'
import { ApiManager } from 'apis/apimanager'
import _ from 'lodash'

const { RESUME } = types

function* getRequest(action) {
  try {
    const res = yield call(ApiManager.getExample)
    const {
      data: { data, status, message },
    } = res
  } catch (e) {
    console.log(e)
  }
}

function* resumeSagas() {
  yield all([takeLatest(RESUME.GET_REQUEST, getRequest)])
}

export default resumeSagas
