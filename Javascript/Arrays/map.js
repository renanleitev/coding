// Gerando uma lista aleatória, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const lista = [];
for(let i = 0; i < 5; i++){
    lista.push(aleatorio());
}
console.log(lista);
// Map = Modifica e retorna todos os itens do array
const listaDobro = lista.map(item => item * 2);
console.log(listaDobro);
// É possível obter o índice dos itens do array
const listaIndice = lista.map((valor, indice) => indice);
console.log(listaIndice);
// Percorrendo um array de objetos
const pessoas = [
    {nome: 'Alberto', idade: 17},
    {nome: 'Beltrano', idade: 25},
    {nome: 'Caio', idade: 33},
    {nome: 'Dimitri', idade: 64},
    {nome: 'Eneas', idade: 82},
]
const listaNomes = pessoas.map(pessoa => pessoa.nome);
const listaIdades = pessoas.map(pessoa => pessoa.idade);
// const listaRemoveNome = pessoas.map(function(pessoa){
//     delete pessoa.nome;
//     return pessoa;
// });
const listaRemoveIdade = pessoas.map(pessoa => ({nome: pessoa.nome}));
const listaComId = pessoas.map(function(pessoa, indice){
    // Aqui, está alterando o objeto original 'pessoas'
    // pessoa.id = indice + 1;
    // return pessoa;
    // Sem alterar a estrutura original
    const newPessoa = { ...pessoa };
    newPessoa.id = indice;
    return newPessoa;
})
console.log(listaNomes);
console.log(listaIdades);
// console.log(listaRemoveNome);
console.log(listaRemoveIdade);
console.log(listaComId);
console.log(pessoas);