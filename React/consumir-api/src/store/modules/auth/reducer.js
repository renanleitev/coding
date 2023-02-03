/* eslint-disable import/no-anonymous-default-export */
import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.login_success: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.isLoading = false;
            return newState;
        }
        case types.login_failure: {
            const newState = { ...initialState };
            return newState;
        }
        default:
            return state;
    }
};