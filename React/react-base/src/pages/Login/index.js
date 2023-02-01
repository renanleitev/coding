import React from 'react';

import { Container } from '../../styles/GlobalStyle';

import { Title, Paragrafo } from './styled.js';

export default function Login(){
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