import * as types from '../types';

export function loginRequest(payload) {
    return {
        type: types.login_request,
        payload
    };
}
export function loginSuccess(payload) {
    return {
        type: types.login_success,
        payload
    };
}
export function loginFailure(payload) {
    return {
        type: types.login_failure,
        payload
    };
}