// Gerando uma lista de numeros aleatorios, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function geraMatriz(array, elementos){
    for(let i = 0; i < elementos; i++){
        array.push(aleatorio());
    }
}
function somaMatrizDiagonal(){
    let soma = 0;
    const elementos = 20;
    for(let i = 0; i < elementos; i++){
        let numeros = [];
        geraMatriz(numeros, elementos);
        soma += numeros[i];
        console.log(numeros, soma);
        numeros = [];
    }
    return soma;
}
function somaMatrizPares(){
    let soma = 0;
    const listaSoma = [];
    const elementos = 20;
    for(let i = 0; i < elementos; i++){
        let numeros = [];
        geraMatriz(numeros, elementos);
        soma = numeros.reduce((acumulador, numero) => {
            if (numero % 2 === 0) acumulador += numero;
            return acumulador;
        }, 0);
        listaSoma.push(soma);
        numeros = [];
    }
    return listaSoma;
}
// console.log(somaMatrizDiagonal());
console.log(somaMatrizPares());
