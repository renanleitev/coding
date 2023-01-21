function geraInvertido(obj){
    const original = Array.from(obj.toString());
    let invertido = [];
    for (let i = 0; i < original.length; i++){
        invertido[i] = original[(original.length-1)-i];
    }
    invertido = invertido.toString().replaceAll(',', '');
    return invertido;
}
console.log(geraInvertido('Abacate'));