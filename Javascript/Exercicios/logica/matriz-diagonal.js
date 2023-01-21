// Gerando uma lista de numeros aleatorios, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function somaMatrizDiagonal(){
    let soma = 0;
    for(let i = 0; i < 20; i++){
        let numeros = [];
        for(let i = 0; i < 20; i++){
            numeros.push(aleatorio());
        }
        soma += numeros[i];
        console.log(numeros, soma);
        numeros = [];
    }
    return soma;
}
console.log(somaMatrizDiagonal());
