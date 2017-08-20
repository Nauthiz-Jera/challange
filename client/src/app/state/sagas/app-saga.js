import API from '../../api/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAllWidgetsSuccess, fetchAllWidgetsFail } from '../actions/app.js';
import { FETCH_ALL_WIDGETS } from '../actions/action-types';

export function* fetchAllWidgets() {
  try {
    const result = yield call(API.fetchWidgets);
    yield put(fetchAllWidgetsSuccess(result));
  } catch (error) {
    yield put(fetchAllWidgetsFail(error));
  }
}

export function* watchFetchAllWidgets() {
  yield takeLatest(FETCH_ALL_WIDGETS.REQUESTED, fetchAllWidgets);
}
