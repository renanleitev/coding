import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled.js';
import * as loginActions from '../../store/modules/login/actions';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import history from '../../services/history';

export default function Login(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginActions.loginRequest());
        if(isLoggedIn) history.push('/');
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            {(!isLoggedIn && 
                (<>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Surname'></input>
                <input type='text' placeholder='Address'></input>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                </>))
                ||
                (<p>Login successful. Return to home.</p>)
            }
            <button type="submit">{isLoggedIn ? ('Return to home') : ('Login')}</button>
            </Form>
        </Container>
    );
}