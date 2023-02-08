// g => global (encontra todas as ocorrências)
// i => insensitive (independente de maiúscula ou minúscula)
const { texto } = require('./texto-base');

let regExp1 = /Animi/g;

// test = Verifica se a expressão existe ou não (true or false)
console.log(regExp1.test(texto));

regExp1 = /Animi/i;

console.log(regExp1.test(texto));

// exec = Retorna um array contendo os resultados da pesquisa
console.log(regExp1.exec(texto));

// É possível obter o index (onde foi encontrada a expressão)
console.log(regExp1.exec(texto).index);

// É possível dividir a expressão por grupos ()
const regExp2 = /(Lorem)( ipsum dolor)/i;
let found = regExp2.exec(texto);

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

// | => ou => Encontra o primeiro item da busca
const regExp3 = /(repellendus)( blanditiis| dicta| minima)/i;
found = regExp3.exec(texto);

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);