// Usando charAt
function contaLetras(texto, letra) {
    var cont = 0;
    texto = texto.toLowerCase(); //Coloca texto em minúsculas
    for (var i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === letra) {
            cont++; //Incrementa contagem
        }
    }
    return cont;
}
console.log(contaLetras('abacate', 'a'));
// Usando reduce
function quantidadeLetras(texto, letra){
    const palavra = Array.from(texto.toString().toLowerCase());
    const quantidade = palavra.reduce((acumulador, caractere) => {
        if (caractere === letra) acumulador++;
        return acumulador;
    }, 0);
    return quantidade;
}
console.log(quantidadeLetras('Abacate', 'a'));