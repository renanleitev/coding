function rearranjoStrings(original, derivada){
    const primeiraPalavra = Array.from(original.toString());
    let segundaPalavra = Array.from(derivada.toString());
    let resposta = false;
    for (let i = 0; i < primeiraPalavra.length; i++){
        if (segundaPalavra.includes(primeiraPalavra[i])) {
            segundaPalavra = segundaPalavra.filter(letra => letra !== primeiraPalavra[i]);
        }
    }
    if (segundaPalavra.length === 0) resposta = true;
    return resposta;
}
// É possível formar a segunda palavra com as letras da primeira palavra?
console.log(rearranjoStrings('cabo', 'boca'));