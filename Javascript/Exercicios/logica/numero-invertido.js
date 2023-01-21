function numeroInvertido(num){
    const numero = Array.from(num.toString());
    let invertido = [];
    for (let i = 0; i < numero.length; i++){
        invertido[i] = numero[(numero.length-1)-i];
    }
    invertido = Number.parseInt(invertido.toString().replaceAll(',', ''));
    return invertido;
}
console.log(numeroInvertido(875));