import React from 'react';

import { Container } from '../../styles/GlobalStyle';

import { Title, Paragrafo } from './styled.js';

import axios from '../../services/axios';

export default function Login(){
    // Assim que o componente é renderizado, a função é executada
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            const { data } = response;
            console.log(data);
        }
        getData();
    }, []);
    return (
        <Container>
            <Title isRed={true}>
                Titulo
                <small>Subtitulo</small>
            </Title>
            <Paragrafo>Paragrafo</Paragrafo>
            <a href=".">Link</a>
            <button type="button">Enviar</button>
        </Container>
    );
}