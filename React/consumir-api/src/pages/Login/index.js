import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import Input from '../../components/Input';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import validate from '../../store/modules/auth/validate';

export default function Login(props){
    const dispatch = useDispatch();
    const prevPath = get(props, 'location.state.prevPath', '/');
    const isLoading = useSelector(state => state.auth.isLoading);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        validate(null, null, email, password);
        dispatch(actions.loginRequest({ email, password, prevPath }));
    }
    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Input field={email} setField={setEmail} placeholder='email'/>
                <Input field={password} setField={setPassword} placeholder='password'/>
                <button type='submit'>Acessar</button>
            </Form>
        </Container>
    );
}