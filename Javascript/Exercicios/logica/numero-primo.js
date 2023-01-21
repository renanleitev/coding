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
console.log(numeroPrimo(4));