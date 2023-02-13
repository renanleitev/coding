import React, {useEffect, useState} from 'react';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function UserContainer(){
    const [users, setUsers] = useState('10');
    const dispatch = useDispatch();
    useEffect(() => {
        const result = axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
        setUsers(result);
    }, [])
    console.log(users);
    return (
        <div>
            <h2>User List</h2>
            {
                
            }
        </div>
    )
}