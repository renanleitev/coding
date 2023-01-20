/* 
Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). 
Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna.
*/
function closure(nome){
    return function(){
        return nome;
    }
};
// Aqui, a variável "funcao" tem acesso (closure) ao valor "Fulano"
const funcao = closure('Fulano');
console.log(funcao());