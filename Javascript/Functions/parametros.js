// É possível criar funções com ou sem parâmetros
function anyArgs(){
    console.log("Função declarada sem parâmetros.");
}
anyArgs('Não importa o que você coloque aqui, a função vai executar normalmente.');
// É possível obter os argumentos por meio dos índices
function keyArgs(){
    console.log(arguments[2]);
}
keyArgs(10, 11, 12);
// É possível realizar operações com os argumentos passados
function sumArgs(a, b, c) {
    let total = 0;
    for (let args of arguments){
        total += args;
    }
    console.log(total, a, b, c);
}
sumArgs(1, 2, 3, 4, 5, 6);
// Quando são passados menos parâmetros do que o exigido, o restante se torna "undefined"
function lessArgs(a, b, c){
    console.log(a, b, c);
}
lessArgs(1, 2);
// É possível definir valores padrões para os parâmetros
function defaultArgs(a = 0, b = 0){
    console.log(a+b);
}
defaultArgs(2);
defaultArgs();
defaultArgs(2, 4);
// É possível obter os parâmetros por desestruturação
function objArgs({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
objArgs({
    nome: 'Fulano',
    sobrenome: 'Silva',
    idade: 23,
});
let objeto = {nome: 'Beltrano', sobrenome: 'Pereira', idade: 44};
objArgs(objeto);
function arrayArgs([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
arrayArgs([11, 12, 13]);