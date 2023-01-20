// É possível criar objetos utilizando factory/constructor function
// ! Factory function
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};
const p1 = criaPessoa('Fulano', 'Silva');
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
// ! Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Para evitar modificações posteriores
    Object.freeze(this);
};
const p2 = new Pessoa('Beltrano', 'Pereira');
console.log(p2.nome);
console.log(p2.sobrenome);
// Mesmo sendo uma constante, é possível alterar os valores de um objeto
// ! Obs: Se tiver Object.freeze(this), não é possível alterar!
p2.nome = 'Galvão';
console.log(p2.nome);