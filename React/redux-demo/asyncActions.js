// ! Bibliotecas
const redux = require('@reduxjs/toolkit');
const configureStore = redux.configureStore;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// ! Estado Inicial
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// ! Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// ! Action Types
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
// payload = Resposta da API
const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: payload,
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// ! Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// ! Action Creators
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

// ! Store
const store = configureStore({
    reducer: reducer,
    middleware: [thunkMiddleware],
});

store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());
