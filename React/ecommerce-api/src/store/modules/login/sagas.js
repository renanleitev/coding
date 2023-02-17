import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    try {
        let credentialsAreValid = false;
        const response = yield call(axios.get, '/users');
        response.data.forEach((user) => {
            if ((payload.email === user.email) && (payload.password === user.password)) {
                credentialsAreValid = true;
            }  
        })
        if (credentialsAreValid) {
            toast.success('Login successful! Redirecting...');
            yield put(actions.loginSuccess());
            history.push('/');
        }
        if (!credentialsAreValid) toast.error('User/password invalid.');
    } catch (e) {
        toast.error('Error:', e);
        yield put(actions.loginFailure());
    }
}
function* loginFailure({payload}) {
    try {
        if (payload.isLoggedIn){
            yield put(actions.loginSuccess());
        }
    } catch (e) {
        toast.error('Erro', e);
        yield put(actions.loginFailure());
    }
}
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.LOGIN_FAILURE, loginFailure),
]);