function validaCPF(cpf){
    const listaCPF = [];
    for (let numero of Array.from(String(cpf))){
        if (Number.isInteger(Number.parseInt(numero))) listaCPF.push(Number.parseInt(numero));
    };
    if (listaCPF.length < 11) return 'O CPF é inválido.';
    const digitos = listaCPF.splice(-2, Number.MAX_VALUE);
    const primeiroDigito = verificaDigito(listaCPF, listaCPF.length + digitos.length);
    listaCPF.push(primeiroDigito);
    const segundoDigito = verificaDigito(listaCPF, listaCPF.length + digitos.length);
    return (digitos.includes(primeiroDigito) && digitos.includes(segundoDigito)) ? 'O CPF é válido.' : 'O CPF é inválido.';
};
function verificaDigito(array, multiplicador){
    const soma = array
        .map(function(numero){
            multiplicador--;
            return numero * multiplicador;
        })
        .reduce((acumulador, numero) => acumulador + numero);
    const digito = 11 - (soma % 11);
    return digito > 9 ? 0 : digito;
};
const cpf = 18164076152;
console.log(validaCPF(cpf));
