import React, { useState } from 'react';
import {get} from 'lodash';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import Input from '../../components/Input'; 

export default function Aluno({ match }){
    const id = get(match, 'params.id', 0);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    return (
        <Container>
            <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>
            <Form>
                <Input field={nome} setField={setNome} placeholder='nome'/>
                <Input field={sobrenome} setField={setSobrenome} placeholder='sobrenome'/>
                <Input field={email} setField={setEmail} placeholder='email'/>
                <Input field={idade} setField={setIdade} placeholder='idade'/>
                <Input field={peso} setField={setPeso} placeholder='peso'/>
                <Input field={altura} setField={setAltura} placeholder='altura'/>
                <button type='submit'>Enviar</button>
            </Form>
        </Container>
    );
}
Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}