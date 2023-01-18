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
array.forEach(function(valor, indice, array){
    codigo
})
*/
numeros.forEach(n => console.log(n));