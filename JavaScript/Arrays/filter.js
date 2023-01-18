// Gerando uma lista aleatória de 10 números, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const lista = [];
for(let i = 0; i < 10; i++){
    lista.push(aleatorio());
}
// Retornando itens maiores que 10
const listaFiltrada = lista.filter(item => item > 10);
console.log(listaFiltrada);
// Filtrando um array de objetos
const pessoas = [
    {nome: 'Alberto', idade: 17},
    {nome: 'Beltrano', idade: 25},
    {nome: 'Caio', idade: 33},
    {nome: 'Dimitri', idade: 64},
    {nome: 'Eneas', idade: 82},
]
// Filtrando pessoas com nomes maiores de 6 letras
const nomesGrandes = pessoas.filter(pessoa => pessoa.nome.length > 6);
console.log(nomesGrandes);
// Filtrando pessoas com mais de 60 anos
const nomesIdosos = pessoas.filter(pessoa => pessoa.idade > 60);
console.log(nomesIdosos);
// Filtrando pessoas com nomes que terminam com a letra 'o'
const nomesTerminaComLetraO = pessoas.filter(pessoa => pessoa.nome.endsWith('o'));
console.log(nomesTerminaComLetraO);