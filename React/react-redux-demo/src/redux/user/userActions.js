import * as types from './userTypes';

export const fetchUsersRequest = () => {
    return {
        type: types.FETCH_USERS_REQUEST
    }
}
// payload = Resposta da API
export const fetchUsersSuccess = (payload) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: payload,
    }
}
export const fetchUsersFailure = error => {
    return {
        type: types.FETCH_USERS_FAILURE,
        payload: error
    }
}
// ! Redux-thunk permite retornar uma função
// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(fetchUsersRequest);
//         const result = axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 const users = response.data.map(user => user.id);
//                 dispatch(fetchUsersSuccess(users));
//             })
//             .catch(error => {
//                 dispatch(fetchUsersFailure(error.message));
//             })
//         return result;
//     }
// }