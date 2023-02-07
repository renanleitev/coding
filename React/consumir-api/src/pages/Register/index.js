import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import validate from '../../store/modules/auth/validate';
import * as actions from '../../store/modules/auth/actions';

export default function Register(){
    const dispatch = useDispatch();
    const id = useSelector(state => state.auth);
    const nomeStored = useSelector(state => state.auth.user.nome);
    const emailStored = useSelector(state => state.auth.user.email);
    const isLoading = useSelector(state => state.auth.isLoading);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!id) return;
        setNome(nomeStored);
        setEmail(emailStored);
    }, [emailStored, id, nomeStored]);

    async function handleSubmit(e) {
        e.preventDefault();
        const formErrors = validate({id: id, nome: nome, email: email, password: password});
        if (!formErrors) dispatch(actions.registerRequest({ nome, email, password, id }));  
    }
    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <h1>{isLoggedIn ? 'Editar dados' : 'Crie a sua conta'}</h1>
            <Form onSubmit={handleSubmit}>
                <Input field={nome} setField={setNome} placeholder='nome'/>
                <Input field={email} setField={setEmail} placeholder='email'/>
                <Input field={password} setField={setPassword} placeholder='password'/>
                <button type="submit">{isLoggedIn ? 'Salvar': 'Criar conta'}</button>
            </Form>
        </Container>
    );
}