// O retorno de uma função permite armazenar o valor em uma variável
function comRetorno (a, b){
    return a + b;
};
function semRetorno (a, b){
    console.log(a + b);
}
let var1 = comRetorno(5, 2);
// Aqui, a função é executada e o resultado é exibido no console
let var2 = semRetorno(5, 2);
console.log('Executando a função com retorno: ', var1);
// Mas o valor não é armazenado na variável, retornando 'undefined'
console.log('Executando a função sem retorno: ', var2);
