import { fork, call, take, put, all } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/index';
import { authorizer } from '../../api/index';

function* authenticationSaga() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    console.log(task);
  }
}

function* authorize(username, password) {
  const res = yield call(authorizer, username, password);
  if (res.data.user) {
    console.log(res.data.user);
    yield put({ type: LOGIN_SUCCESS, user: res.data.user });
  } else if (res.data.error) {
    yield put({ type: LOGIN_ERROR, validationError: res.data.error });
  }
}

export function* mySaga() {
  yield all([authenticationSaga()]);
}
