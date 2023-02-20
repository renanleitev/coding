import React, {useState, useCallback} from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled.js';
import history from '../../services/history'
import * as actions from '../../store/modules/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { toast } from 'react-toastify';

export default function Register(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const id = undefined;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState(''); 
    const dispatch = useDispatch();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            if (!isLoggedIn) { 
                dispatch(actions.registerRequest({
                    id, name, surname, address, email, password
                }));
                dispatch(actions.loginSuccess());
            }
            if (isLoggedIn) {
                history.push('/');
            } history.push('/');
        } 
        else {
            toast.error('Password needs to be the same.')
        }
    }, [password, repeatPassword, isLoggedIn, dispatch, id, name, surname, address, email]);
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            {(!isLoggedIn && 
                (<>
                    <h2>Create an account</h2>
                    <label htmlFor='name'>Name</label>
                    <Input field={name} setField={setName} placeholder='name'/>
                    <label htmlFor='surname'>Surname</label>
                    <Input field={surname} setField={setSurname} placeholder='surname'/>
                    <label htmlFor='address'>Address</label>
                    <Input field={address} setField={setAddress} placeholder='address'/>
                    <label htmlFor='email'>Email</label>
                    <Input field={email} setField={setEmail} placeholder='email'/>
                    <label htmlFor='password'>Password</label>
                    <Input field={password} setField={setPassword} placeholder='password'/>
                    <label htmlFor='password'>Repeat password</label>
                    <Input field={repeatPassword} setField={setRepeatPassword} placeholder='password'/>
                </>))
                ||
                (<p>Delete account.</p>)
            }
            <button type="submit">{!isLoggedIn ? ('Create') : ('Delete')}</button>
            </Form>
        </Container>
    );
}