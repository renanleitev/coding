import { call, put, all, takeLatest } from '@redux-saga/core/effects';

import { toast } from 'react-toastify';

import * as actions from './actions';

import * as types from '../types';

const requisicao = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 600);
});

function* exampleRequest() {
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch {
        toast.error('deu erro');
        yield put(actions.clicaBotaoFailure());
    }
}
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.botao_clicado_request, exampleRequest)
]);