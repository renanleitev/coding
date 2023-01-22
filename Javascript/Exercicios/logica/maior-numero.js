function maiorNumero(num){
    let numero = Array.from(num.toString());
    const comprimento = numero.length;
    let numeroMaior = [];
    while (numeroMaior.length !== comprimento){
        let maior = 0;
        numero.map(digito => {
            if (digito > maior) maior = digito;
        });
        numero = numero.filter(value => value !== maior);
        numeroMaior.push(maior);
        maior = 0;
    }
    return Number.parseInt(numeroMaior.toString().replaceAll(',', ''));
}
// Dado um número, retorne o maior número possível com a combinação de dígitos
console.log(maiorNumero(201));