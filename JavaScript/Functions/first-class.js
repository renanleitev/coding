/*
Função First-class quando suas funções são tratadas como qualquer outra variável. 
A função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.
*/

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