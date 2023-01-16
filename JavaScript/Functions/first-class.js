// First-class objects = É possível usar uma variável/constante como função
let variavel = function (){
    console.log('Variável como função.');
};
const constante = function (){
    console.log('Constante como função.');
};
variavel();
constante();
// É possível receber e executar uma função dentro de uma função
function executaFuncao(funcao){
    funcao();
}
executaFuncao(variavel);
executaFuncao(constante);