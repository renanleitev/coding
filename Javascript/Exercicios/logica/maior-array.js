// Gerando uma lista de numeros aleatorios, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const numeros = [];
for(let i = 0; i < 5; i++){
    numeros.push(aleatorio());
}
function maiorArray(array){
    console.log(array);
    let maior = 0;
    array.map((numero) => {
        if (numero > maior) maior = numero;
    });
    return maior;
}
console.log(maiorArray(numeros));