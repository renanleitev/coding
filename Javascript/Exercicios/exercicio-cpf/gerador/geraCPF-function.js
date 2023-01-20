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
function aleatorio(min = 0, max = 9){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
};
function geraNumeroCPF(){
    const cpf = [];
    for(let i = 0; i < 11; i++){
        cpf.push(aleatorio());
    };
    let cpfString = cpf.toString().replaceAll(',', '');
    return cpfString;
};
function geradorCPF(){
    let valido = true;
    let numeroCPF;
    let resultado;
    while(valido){
        numeroCPF = geraNumeroCPF();
        resultado = validaCPF(numeroCPF);
        if (resultado === 'O CPF é válido.') valido = false;
    };
    return `${numeroCPF} : ${resultado}`;   
};
console.log(geradorCPF());
