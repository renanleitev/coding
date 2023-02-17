import { call, put, all, takeLatest } from '@redux-saga/core/effects';

import { toast } from 'react-toastify';

import * as actions from './actions';

import * as types from '../types';

const requisicao = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 600);
});

function* loginRequest() {
    try {
        yield call(requisicao);
        yield put(actions.loginSuccess());
    } catch (e) {
        toast.error('Erro', e);
        yield put(actions.loginFailure());
    }
}
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest)
]);