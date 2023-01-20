const pessoas = [
    {id: 3, nome: 'Alberto'},
    {id: 2, nome: 'Beltrano'},
    {id: 1, nome: 'Sicrano'},
];
const semMap = {};
// Desestruturando em variáveis dentro de um laço for of
for (const {id, nome} of pessoas){
    console.log(id, nome);
};
// Colocando o valor do id como chave em um novo objeto
for (const pessoa of pessoas){
    const {id} = pessoa;
    semMap[id] = {...pessoa};
};
// Problema: a ordem do id é alterada
console.log('Sem map:', semMap);
// Resolvendo com map
const comMap = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    comMap.set(id, {...pessoa});
};
// Mantem a ordem do id
console.log('Com map:', comMap);
// Visualizando cada elemento em variaveis
for (const [identificador, {id, nome}] of comMap){
    console.log('identificador:', identificador, 'id:', id, 'nome:', nome);
};
// É possível visualizar as chaves
console.log('Chaves:', comMap.keys());
// É possível visualizar os valores
console.log('Valores:', comMap.values());
// É possível deletar por chaves
comMap.delete(2);
console.log(comMap);
