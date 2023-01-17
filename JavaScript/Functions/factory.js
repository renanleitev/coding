/*
Factory Function encapsula a criação de objetos a partir de um de seus métodos, 
funcionando como uma fábrica de objetos propriamente dita.
*/
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}. ${this.nome} fala demais!`;
        }
    }
}
const p1 = criaPessoa('Fulano', 'Silva');
console.log(p1);
console.log(p1.fala("política"));