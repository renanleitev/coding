function numeroInvertido(num){
    const numero = Array.from(String(num));
    const invertido = [];
    let incremento = 0;
    for (let num of numero){
        invertido.shift()
    }
    return invertido;
}
console.log(numeroInvertido(875));