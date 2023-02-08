import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.login_request,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.login_success,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.login_failure,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.register_request,
    payload,
  };
}

export function registerUpdatedSuccess(payload) {
  return {
    type: types.register_updated_success,
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.register_created_success,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.register_failure,
    payload,
  };
}
