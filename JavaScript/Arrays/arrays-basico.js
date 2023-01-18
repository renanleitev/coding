// ! Array tradicional (mais usado)
const nomes = ['Alberto', 'Beltrano', 'Caio'];
// ! Array com método new (menos usado)
const cidades = new Array('Fortaleza', 'Recife', 'Salvador');
// ! Substituindo elementos de um array
nomes[2] = 'Fulano';
console.log(nomes);
// ! Apagando elementos de um array
// delete = Remove e substitui por '1 empty item'
delete nomes[2];
console.log(nomes);
// pop = Remove o item final e retorna o valor removido
const removidoPop = cidades.pop();
console.log(cidades, removidoPop);
// shift = Remove o item inicial e retorna o valor removido
const removidoShift = cidades.shift();
console.log(cidades, removidoShift);
// ! Adicionando elementos em um array
// push = Adiciona ao final do array
nomes.push('Sicrano');
console.log(nomes);
// unshift = Adiciona no começo do array
nomes.unshift('Ziraldo');
console.log(nomes);