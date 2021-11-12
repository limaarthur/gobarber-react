import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

function* rootSaga() {
  return yield all([auth, user]);
}

export default rootSaga;
