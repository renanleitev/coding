function validaCpf(cpf){
    const listaCpf = [];
    for (let numero of Array.from(cpf)){
        if (Number.isInteger(Number.parseInt(numero))) listaCpf.push(Number.parseInt(numero));
    };
    const digitos = listaCpf.splice(-2, Number.MAX_VALUE);
    const primeiroDigito = geraDigito(listaCpf, 11);
    listaCpf.push(primeiroDigito);
    const segundoDigito = geraDigito(listaCpf, 12);
    return (digitos.includes(primeiroDigito) && digitos.includes(segundoDigito)) ? 'O CPF é válido.' : 'O CPF é inválido.';
};
function geraDigito(array, multiplicador){
    const soma = array
        .map(function(numero){
            multiplicador--;
            return numero * multiplicador;
        })
        .reduce((acumulador, numero) => acumulador + numero);
    let digito = 11 - (soma % 11);
    if (digito > 9) digito = 0;
    return digito;
};
const cpf = '705.484.450-52';
console.log(validaCpf(cpf));
