const { texto, arquivos } = require('./texto-base');

/*
! Quantificadores
| * => opcional (0 ou n) === {0,}
| + => obrigatório (1 ou n) === {1,}
| ? => opcional (0 ou 1) === {0,1}
| \ => Caractere de escape
| {n, m} => Mínimo e Máximo
| {10,} => No mínimo 10
| {0,10} === {,10} => De 0 a 10
| {5,10} => De 5 a 10
*/

// console.log(texto);

// let regExp1 = /lorem/gi;

// Não encontra 'Loooooooorem'
// console.log(texto.match(regExp1)); 

// ! Usando + (encontra pelo menos um)
// regExp1 = /lo+remo+/gi;
// console.log(texto.match(regExp1)); 

// ! Usando grupos
// const regExp2 = /\.(jpg|jpeg)/gi;

// ! Usando ? (encontra um ou nenhum)
// const regExp2 = /\.jpe?g/gi;

// ! Usando * (encontra todos ou nenhum)
// const regExp2 = /\.jpe*g/gi;

// ! Usando {} => Encontrando o mínimo e o máximo
// let regExp2 = /\.jpe{1,}g/gi;
// regExp2 = /\.jpe{0,1}g/gi;

// ! Usando combinações de grupos
const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regExp2));
}