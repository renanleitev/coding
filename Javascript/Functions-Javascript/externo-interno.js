function externo(inicio){
    function interno (final){
        return inicio + ' ' + final;
    }
    return interno;
}
// Primeiro, recebe o parâmetro externo
const teste = externo('Olá');
// Depois, o parâmetro interno
const resultado = teste('mundo');
console.log(teste);
console.log(teste('mundo'));
console.log(resultado);
// Exemplo: Função de multiplicação
function multiplicador(multiplicador){
    return function(n){
        return n*multiplicador;
    }
};
const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quadriplica = multiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));