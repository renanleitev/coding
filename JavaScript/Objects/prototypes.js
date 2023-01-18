function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
};
const p1 = new Pessoa('Fulano', 'Silva', 27);
// prototype = Evita repetição de código, estabelecendo funcionalidades básicas para todos os objetos
Pessoa.prototype.teste = 'Criado no protótipo';
// No caso de arrow function, this.nome não funciona (pois só permite o return)
Pessoa.prototype.nomeCompleto = (obj) => `${obj.nome} ${obj.sobrenome}.`;
Pessoa.prototype.felizAniversario = (obj) => `Parabéns! Você tem ${obj.idade+1} anos.`
console.log(p1.teste);
console.log(p1.nomeCompleto(p1));
console.log(p1.felizAniversario(p1));
console.log(Pessoa.prototype === p1.__proto__);
