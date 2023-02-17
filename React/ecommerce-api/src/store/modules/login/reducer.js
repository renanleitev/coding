import * as types from '../types';

const initialState = {
    isLoggedIn: false,
};

export default function loginReducer (state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCESS:
            const newState = { ...state };
            newState.isLoggedIn = !newState.isLoggedIn;
            return newState;
        case types.LOGIN_FAILURE:
            return state;
        case types.LOGIN_REQUEST:
            return state;
        default:
            return state;
    }
};