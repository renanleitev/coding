import React from 'react';

import { Container } from '../../styles/GlobalStyle';

import { Title, Paragrafo } from './styled.js';

import * as exampleActions from '../../store/modules/example/actions';

import { useDispatch } from 'react-redux';

// import axios from '../../services/axios';

export default function Login(){
    const dispatch = useDispatch();
    function handleClick(e) {
        e.preventDefault();
        dispatch(exampleActions.clicaBotaoRequest());
    }
    return (
        <Container>
            <Title isRed={true}>
                Titulo
                <small>Subtitulo</small>
            </Title>
            <Paragrafo>Paragrafo</Paragrafo>
            <a href=".">Link</a>
            <button type="button" onClick={handleClick}>Enviar</button>
        </Container>
    );
}