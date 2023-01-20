const pessoa = {
    nome: 'Fulano',
    sobrenome: 'De tal',
    idade: 30,
    endereco: {
        rua: 'Av. Futuro',
        numero: 2023,
    }
};
// Atribuição via desestruturação
const {nome} = pessoa;
console.log(nome);
// Definindo por cada chave no objeto (nome, sobrenome)
const {nome: primeiroNome = '', sobrenome: segundoNome = ''} = pessoa;
console.log(primeiroNome, segundoNome);
// Peso não foi declarado, mas é possível definir um valor padrão
const {endereco: {rua, numero}, endereco, peso = '90'} = pessoa;
console.log(rua, numero, endereco, peso);
// É possível utilizar o resto
const {nome: id, ...resto} = pessoa;
console.log(id, resto);