import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAdminUserInfo(action){
  try{
    const response = yield axios.get(`/api/admin/user-info`);
    yield put({type: `SET_ADMIN_USER_INFO`, payload: response.data});
  } catch(error){
    console.log('Error in admin user info GET', error);
  }
}

function* putAdminUserInfo(action){
  try{
    yield axios.put(`/api/admin/user-info`, action.payload);
    yield put({type: `GET_ADMIN_USER_INFO`});
  } catch(error){
    console.log('Error in admin user info PUT', error);
  }
}

function* adminSaga() {
  yield takeLatest(`GET_ADMIN_USER_INFO`, getAdminUserInfo);
  yield takeLatest(`PUT_ADMIN_USER_INFO`, putAdminUserInfo);
}
  
export default adminSaga;