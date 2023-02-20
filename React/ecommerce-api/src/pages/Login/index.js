import React, {useState, useCallback} from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled.js';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input';

export default function Login(){
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const user = useSelector(state => state.login.user);
    const id = user.id;
    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [address, setAddress] = useState(user.address);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        isLoggedIn ? dispatch(actions.editRequest({
            id, name, surname, address, email, password
        })) : dispatch(actions.loginRequest({loginEmail, loginPassword}));
    }, [isLoggedIn, dispatch, id, name, surname, address, email, password, loginEmail, loginPassword]);
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            {(!isLoggedIn && 
                (<>
                    <h2>Login</h2>
                    <label htmlFor='email'>Email</label>
                    <Input field={loginEmail} setField={setLoginEmail} placeholder='email'/>
                    <label htmlFor='password'>Password</label>
                    <Input field={loginPassword} setField={setLoginPassword} placeholder='password'/>
                    <Link className='link' to='/register'>Don't have an account? Click here to make a new one!</Link>
                </>))
                ||
                (<>
                    <h2>Edit</h2>
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
                </>)
            }
            <button type="submit">{!isLoggedIn ? ('Login'): ('Edit')}</button>
            </Form>
        </Container>
    );
}