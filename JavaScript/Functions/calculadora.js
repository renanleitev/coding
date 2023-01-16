function calculadora(operador, resultado, ...numeros){
    for (let numero of numeros){
        if (operador === '+') {resultado += numero};
        if (operador === '-') {resultado -= numero};
        if (operador === '*') {resultado *= numero};
        if (operador === '/') {resultado /= numero};
    }
    console.log(resultado);
}
calculadora('+', 0, 10, 20, 30);
calculadora('-', 200, 10, 20, 30);
calculadora('*', 1, 10, 20, 30);
calculadora('/', 1, 10, 20, 30);