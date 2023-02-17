import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...response.data }));
        toast.success('Login efetuado com sucesso');
        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        history.push(payload.prevPath);
    } catch (e) {
        toast.error('Usuário ou senha inválidos');
        yield put(actions.loginFailure());
    }
}
function* registerRequest({ payload }) {
    const { id, nome, email, password } = payload;
    try {
      if (id) {
        yield call(axios.put, '/users', {
          email,
          nome,
          password: password || undefined,
        });
        toast.success('Atualizado com sucesso!');
        yield put(actions.registerUpdatedSuccess({ nome, email, password }));
      } else {
        yield call(axios.post, '/users', {
          email,
          nome,
          password,
        });
        toast.success('Cadastrado com sucesso!');
        yield put(actions.registerCreatedSuccess({ nome, email, password }));
        history.push('/login');
      }
    } catch (er) {
      const errors = get(er, 'response.data.error', []);
      const status = get(er, 'response.status', 0);
  
      if (status === 401) {
        toast.error('Faça login novamente');
        yield put(actions.loginFailure());
        return history.push('/login');
      }
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error(errors);
      }
      return yield put(actions.registerFailure());
    }
}
// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.login_request, loginRequest),
    takeLatest(types.register_request, registerRequest),
]);