const falar = {
    falar(){
        console.log(`${this.nome} está falando...`);
    }
}
// ! Por desestruturação
// const pessoaPrototype = { ...falar };
// ! Por atribuição
const pessoaPrototype = Object.assign({}, falar);
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
};
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nome);
console.log(p1.falar());