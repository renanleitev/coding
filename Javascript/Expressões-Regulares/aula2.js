const { texto } = require('./texto-base');

const regExp1 = /et|dolor/gi;

// match => Encontra na string o padrão regExp
// console.log(texto.match(regExp1));

// Substituindo todo 'et' e 'dolor' por 'TESTANDO'
// console.log(texto.replace(/et|dolor/gi, 'TESTANDO'));

// É possível alterar o grupo inteiro (útil para HTML)
// console.log(texto.replace(/(et|dolor)/gi, '---$1---'));
// console.log(texto.replace(/(et|dolor)/gi, '<p>$1</p>'));

// É possível alterar por meio de uma função
console.log(texto.replace(/(et|dolor)/gi, function(input){
    return '---' + input.toUpperCase() + '---';
}));