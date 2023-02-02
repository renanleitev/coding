import * as types from '../types';

export function clicaBotaoRequest() {
    return {
        type: types.botao_clicado_request,
    };
}
export function clicaBotaoSuccess() {
    return {
        type: types.botao_clicado_success,
    };
}
export function clicaBotaoFailure() {
    return {
        type: types.botao_clicado_failure,
    };
}