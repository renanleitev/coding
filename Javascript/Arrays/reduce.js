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
/*
Reduce = Permite acumular os itens de um array
! Obs = É obrigatório ter um return para que o reduce funcione!
const qualquer = array.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    código;
    return acumulador;
}, salto-acumulador)
! Obs = O salto-acumulador pode ser qualquer variável (numero, array, etc)
*/
// Usando um reduce para somar todos os números de um array
const total = numeros.reduce(function(acumulador, numero){
    acumulador += numero;
    console.log(acumulador, numero);
    return acumulador;
}, 0);
console.log(total);
// Usando um reduce para filtrar os números pares (melhor usar o filter)
const pares = numeros.reduce(function(acumulador, numero){
    if (numero % 2 === 0) acumulador.push(numero);
    return acumulador;
}, []);
console.log(pares);
// Usando o reduce para retornar a pessoa mais velha
const pessoas = [
    {nome: 'Alberto', idade: 17},
    {nome: 'Beltrano', idade: 105},
    {nome: 'Caio', idade: 33},
    {nome: 'Dimitri', idade: 64},
    {nome: 'Eneas', idade: 82},
];
const maisVelha = pessoas.reduce(function(acumulador, pessoa){
    if (acumulador.idade > pessoa.idade){
        return acumulador;
    }
    return pessoa;
});
console.log(maisVelha);