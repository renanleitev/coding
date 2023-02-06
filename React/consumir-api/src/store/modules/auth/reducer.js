/* eslint-disable import/no-anonymous-default-export */
import * as types from '../types';
import axios from '../../../services/axios';

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
            delete axios.defaults.headers.Authorization;
            const newState = { ...initialState };
            return newState;
        }
        case types.login_request: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }
        case types.register_updated_success: {
            const newState = { ...state };
            newState.user.nome = action.payload.user.nome;
            newState.user.email = action.payload.user.email;
            newState.isLoading = false;
            return newState;
        }
        case types.register_created_success: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }
        case types.register_failure: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }
        case types.register_request: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }
        default:
            return state;
    }
};