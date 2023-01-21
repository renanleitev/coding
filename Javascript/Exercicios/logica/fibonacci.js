function sequenciaFibonacci(limite){
    let primeiro = 0;
    let segundo = 1;
    let soma = 0;
    const fibonacci = [primeiro, segundo];
    // Para compensar o array, que já possui dois elementos
    for (let i = 0; i < limite-2; i++){
        soma = primeiro + segundo;
        primeiro = segundo;
        segundo = soma;
        fibonacci.push(soma);
    }
    const resultado = fibonacci.reduce((acumulador, numero) => {
        acumulador += numero;
        return acumulador;
    }, 0);
    return `A soma dos ${limite} primeiros números da sequência fibonacci ${fibonacci} é ${resultado}.`;
}
console.log(sequenciaFibonacci(7));