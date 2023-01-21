/*
Escreve uma função FizzBuzz com as seguintes regras:
Número divisível por 3 = Fizz
Número divisível por 5 = Buzz
Número divisível por 3 e 5 = FizzBuzz
Número NÃO divisível por 3 e 5 = Retorne o próprio número
Checar se é um número = Retorne 'Não é um número'
Aceitar apenas números entre 0 e 100
*/
function fizzBuzz(numero){
    if (typeof(numero) !== 'number'){
        return `Erro: Valor é ${typeof(numero)}. Por favor, digite um número.`;
    }
    else{
        if (Number.isNaN(numero)){
            return `Erro: Valor é ${numero}. Por favor, digite um número.`;
        }
        else{
            if (numero < 0 || numero > 100){
                return `Erro. Por favor, digite um número entre 0 e 100.`;
            }
            else{
                if (numero % 3 === 0 && numero % 5 === 0){
                    return 'FizzBuzz';
                }
                else if (numero % 5 === 0){
                    return 'Buzz';
                }
                else if (numero % 3 === 0){
                    return 'Fizz';
                }
                else{
                    return numero;
                }
            }
        }
    }
};
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}