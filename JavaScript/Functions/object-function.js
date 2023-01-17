// É possível declarar uma função como propriedade de um objeto
const objeto = {
    falar: function(){
        console.log("Isso é uma função dentro de um objeto.");
    },
    simples(){
        console.log("É possível declarar sem usar os dois pontos.");
    } 
};
objeto.falar();
objeto.simples();
// É possível que uma função retorne um objeto
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}
const pessoa1 = criaPessoa('Fulano', 'Silva');
const pessoa2 = {
    nome: 'Beltrano',
    sobrenome: 'Pereira',
};
console.log(typeof(pessoa1), pessoa1);
console.log(typeof(pessoa2), pessoa2);