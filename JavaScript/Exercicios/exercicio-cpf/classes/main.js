class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf;
    }
    checaCpf(){
        const listaCpf = [];
        for (let numero of Array.from(this.cpf)){
            if (Number.isInteger(Number.parseInt(numero))) listaCpf.push(Number.parseInt(numero));
        };
        const digitos = listaCpf.splice(-2, Number.MAX_VALUE);
        const primeiroDigito = ValidaCpf.geraDigito(listaCpf, listaCpf.length + digitos.length);
        listaCpf.push(primeiroDigito);
        const segundoDigito = ValidaCpf.geraDigito(listaCpf, listaCpf.length + digitos.length);
        return (digitos.includes(primeiroDigito) && digitos.includes(segundoDigito)) ? 'O CPF é válido.' : 'O CPF é inválido.';
    }
    static geraDigito(array, multiplicador){
        const soma = array
            .map(function(numero){
                multiplicador--;
                return numero * multiplicador;
            })
            .reduce((acumulador, numero) => acumulador + numero);
        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    }
};
const cpf = new ValidaCpf('705.484.450-52');
console.log(cpf.checaCpf());
