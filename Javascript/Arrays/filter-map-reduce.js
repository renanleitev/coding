// Gerando uma lista de numeros aleatorios, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const numeros = [];
for(let i = 0; i < 5; i++){
    numeros.push(aleatorio());
}
console.log(numeros);
// Obtendo a soma do dobro dos números pares
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);
const dobroPares = pares.map(numero => numero * 2);
console.log(dobroPares);
const somaDobroPares = dobroPares.reduce(function(acumulador, numero){
    acumulador += numero;
    return acumulador;
}, 0);
console.log(somaDobroPares);
// Reduzindo o código
const resultado = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 2)
    .reduce((acumulador, numero) => acumulador + numero);
console.log(resultado);