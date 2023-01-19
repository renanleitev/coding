class ValidaCPF{
    constructor(cpf){
        this.cpf = String(cpf);
    }
    checaCPF(){
        const listaCPF = [];
        for (let numero of Array.from(this.cpf)){
            if (Number.isInteger(Number.parseInt(numero))) listaCPF.push(Number.parseInt(numero));
        };
        if (listaCPF.length < 11) return 'O CPF é inválido.';
        const digitos = listaCPF.splice(-2, Number.MAX_VALUE);
        const primeiroDigito = ValidaCPF.geraDigito(listaCPF, listaCPF.length + digitos.length);
        listaCPF.push(primeiroDigito);
        const segundoDigito = ValidaCPF.geraDigito(listaCPF, listaCPF.length + digitos.length);
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
const cpf = new ValidaCPF('6091678337');
console.log(cpf.checaCPF());
