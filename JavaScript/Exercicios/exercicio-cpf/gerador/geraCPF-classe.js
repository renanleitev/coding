class ValidaCPF{
    geraCPF(){
        let valida = true;
        let primeiroDigito;
        let segundoDigito;
        while(valida){
            let listaCPF = [];
            let cpf = this.geraNumeroCPF();
            for (let numero of Array.from(cpf)){
                if (Number.isInteger(Number.parseInt(numero))) listaCPF.push(Number.parseInt(numero));
            };
            if (listaCPF.length < 11) return 'O CPF é inválido.';
            let digitos = listaCPF.splice(-2, Number.MAX_VALUE);
            primeiroDigito = ValidaCPF.verificaDigito(listaCPF, listaCPF.length + digitos.length);
            listaCPF.push(primeiroDigito);
            segundoDigito = ValidaCPF.verificaDigito(listaCPF, listaCPF.length + digitos.length);
            if (digitos.includes(primeiroDigito) && digitos.includes(segundoDigito)){
                valida = false;
                return `${cpf} : O CPF é válido.`;
            }
        }
    };
    static verificaDigito(array, multiplicador){
        const soma = array
            .map(function(numero){
                multiplicador--;
                return numero * multiplicador;
            })
            .reduce((acumulador, numero) => acumulador + numero);
        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    };
    static aleatorio(min = 0, max = 9){
        const num = Math.random() * (max - min) + min;
        return Math.floor(num);
    };
    geraNumeroCPF(){
        let cpfString;
        const cpf = [];
        for(let i = 0; i < 11; i++){
            cpf.push(ValidaCPF.aleatorio());
        };
        cpfString = cpf.toString().replaceAll(',', '');
        return cpfString;   
    };
};
const cpf = new ValidaCPF();
console.log(cpf.geraCPF());