/* eslint-disable import/no-anonymous-default-export */
import * as types from '../types';

const initialState = {
    botaoClicado: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.botao_clicado_success:
            console.log('sucesso');
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        case types.botao_clicado_failure:
            console.log('deu erro');
            return state;
        case types.botao_clicado_request:
            console.log('fazendo requisição');
            return state;
        default:
            return state;
    }
};