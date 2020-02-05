import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import questionSaga from '../sagas/questionSaga';
import admin from './adminSaga';
import industry from './industrySaga';
import question from './questionSaga';
import splitSaga from './splitSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    questionSaga(),    
    admin(),
    industry(),
    question(),
    splitSaga(),
  ]);
}
