import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    let dataUser;
    try {
        let credentialsAreValid = false;
        const users = yield call(axios.get, '/users');
        users.data.forEach((user) => {
            if (
                (!credentialsAreValid) && 
                (payload.email === user.loginEmail) && 
                (payload.password === user.loginPassword)
            ) {
                credentialsAreValid = true;
                dataUser = user;
            }  
        })
        if (credentialsAreValid) {
            toast.success('Login successful! Redirecting...');
            yield put(actions.loginSuccess());
            yield put(actions.editSuccess(dataUser));
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
function* editRequest({payload}){
    const { id, name, surname, address, email, password } = payload;
    try {
            yield call(axios.put, `/users/${id}`, {
                id,
                name,
                surname,
                address,
                email,
                password
            });
            toast.success('Update successful!');
            yield put(actions.editSuccess(payload));
            history.push('/');
        }
    catch (e) {
        toast.error('Error:', e);
        yield put(actions.loginFailure());
    }
}
function* registerRequest({payload}){
    const { id, name, surname, address, email, password } = payload;
    yield call(axios.post, '/users', {
        id,
        name,
        surname,
        address,
        email,
        password
    });
    toast.success('Register successful!');
    yield put(actions.editSuccess(payload));
    history.push('/');
}
// function* deleteRequest(userId){
//     yield call(axios.delete, `/users/${userId}`);
//     toast.success('Delete successful!');
//     history.push('/');
// }
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.LOGIN_FAILURE, loginFailure),
    takeLatest(types.EDIT_REQUEST, editRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    // takeLatest(types.DELETE_REQUEST, deleteRequest),
]);