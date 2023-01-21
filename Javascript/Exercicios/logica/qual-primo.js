function numeroPrimo(num){
    let resultado = 0;
    let primo = false;
    for (let i = 1; i <= num; i++){
        if (num % i === 0) resultado++;
        if (resultado === 2) primo = true
        else primo = false;
    }
    return primo;
}
function qualNumeroPrimo(num){
    const listaPrimos = [];
    let numero = 0;
    while(listaPrimos.length !== num){
        let resultado = numeroPrimo(numero);
        if (resultado === true) listaPrimos.push(numero);
        numero++;
    }
    return listaPrimos[listaPrimos.length - 1];
}
console.log(qualNumeroPrimo(1001));