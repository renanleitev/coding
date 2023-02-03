import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import Input from '../../components/Input';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';
import Validate from '../../store/modules/auth/validate';

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        Validate(nome, email, password);    
        setIsLoading(true);  
        try {
            await axios.post('/users/', {
                nome, password, email,
            });
            toast.success('Você fez seu cadastro');
            setIsLoading(false);
            history.push('/login');
        }  
        catch (e) {
            setIsLoading(false);
        }
    }
    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <h1>Crie a sua conta</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='nome'>
                    Nome:
                    <Input field={nome} setField={setNome} kind='nome'/>
                </label>
                <label htmlFor='email'>
                    Email:
                    <Input field={email} setField={setEmail} kind='email'/>
                </label>
                <label htmlFor='password'>
                    Senha:
                    <Input field={password} setField={setPassword} kind='password'/>
                </label>
                <button type="submit">Criar minha conta</button>
            </Form>
        </Container>
    );
}