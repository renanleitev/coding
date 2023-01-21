function contaVogais(string){
    const array = Array.from(string.toLowerCase());
    const vogais = array.reduce((acumulador, letra) => {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') acumulador++;
        return acumulador;
    }, 0);
    return vogais;
}
console.log(contaVogais('Beterraba'));