let numero = 42.57893;
let convertido = numero.toString();
let binario = numero.toString(2);
let duasCasas = numero.toFixed(2);
let verificaInteiro = Number.isInteger(numero);
let variavelNaN = numero * 'teste'
let verificaNaN = Number.isNaN(variavelNaN)

console.log(typeof(numero));
console.log(typeof(convertido));
console.log(binario);
console.log(duasCasas);
console.log(verificaInteiro);
console.log(variavelNaN);
console.log(verificaNaN);