const pessoas = [
    {nome: 'Alberto', idade: 17},
    {nome: 'Beltrano', idade: 25},
    {nome: 'Caio', idade: 33},
    {nome: 'Dimitri', idade: 64},
    {nome: 'Eneas', idade: 82},
];
const chave = 'nome';
console.log(pessoas[0].nome);
console.log(pessoas[0]['nome']);
console.log(pessoas[0][chave]);
// É possível definir os atributos após a criação do objeto
const pessoaNova = new Object();
pessoaNova.nome = 'Ziraldo';
pessoaNova.sobrenome = 'Silva';
pessoaNova.idade = 18;
pessoaNova.falando = function(){
    console.log(`${this.nome} está falando...`);
};
pessoaNova.dataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoaNova.nome);
console.log(pessoaNova.sobrenome);
pessoaNova.falando();
console.log(pessoaNova.dataNascimento());
// delete pessoaNova.nome;
console.log(pessoaNova);
for (let chave in pessoaNova){
    console.log(chave);
};