import { spawn, all } from 'redux-saga/effects';
import { watchFetchAllWidgets } from './sagas/app-saga';

function* rootSaga() {
  yield all([spawn(watchFetchAllWidgets)]);
}

export default rootSaga;
