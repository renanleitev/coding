import React, {useState, useCallback} from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled.js';
import * as loginActions from '../../store/modules/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input';
import history from '../../services/history';

export default function Login(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        isLoggedIn ? history.push('/'): dispatch(loginActions.loginRequest({email, password}));
    }, [isLoggedIn, dispatch, email, password])
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            {(!isLoggedIn && 
                (<>
                    <Input field={email} setField={setEmail} placeholder='email'/>
                    <Input field={password} setField={setPassword} placeholder='password'/>
                </>))
                ||
                (<p>Login successful. Please, return to home.</p>)
            }
            <button type="submit">{isLoggedIn ? ('Return to home') : ('Login')}</button>
            </Form>
        </Container>
    );
}