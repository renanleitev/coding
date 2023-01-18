// Copiando propriedades de um objeto para outro
const p1 = {nome: 'copo', preco: 1.8};
const p2 = {
    ...p1,
    material: 'porcelana',
};
// Objetc.assign(destino, origem)
const p3 = Object.assign({}, p2, {peso: 2.5});
p2.nome = 'caneca';
p2.preco = 3.25;
const p4 = {nome: p1.nome, preco: p2.preco, peso: p3.peso};
console.log('Produto 1:', p1);
console.log('Produto 2:', p2);
console.log('Produto 3:', p3);
console.log('Produto 4:', p4);
// Obtendo as chaves de um objeto
console.log('Chaves de p1:', Object.keys(p1));
// Obtendo os valores de um objeto
console.log('Valores de p1:', Object.values(p1));
// Obtendo arrays com chaves e valores do objeto
console.log('Arrays de p1:', Object.entries(p1));
// Desestruturando em um loop for of
for (let [chave, valor] of Object.entries(p1)){
    console.log(chave, valor);
}
// Ou utilizando os indices do array
for (let entrada of Object.entries(p1)){
    console.log(entrada[0], entrada[1]);
}
// Verificando as propriedades de um atributo
console.log('Propriedades de p1.nome:', Object.getOwnPropertyDescriptor(p1, 'nome'));
// Alterando as propriedades de um atributo
Object.defineProperty(p1, 'nome', {
    value: 'qualquer coisa',
    writable: false,
    configurable: false,
})
// Verificando as propriedades de um atributo (após modificação)
console.log('Propriedades alteradas de p1.nome:', Object.getOwnPropertyDescriptor(p1, 'nome'));