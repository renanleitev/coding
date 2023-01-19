class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando...`);
    }
    beber(){
        console.log(`${this.nome} está bebendo...`);
    }
    comer(){
        console.log(`${this.nome} está comendo...`);
    }
};
const p1 = new Pessoa('Fulano', 'Silva');
console.log(p1);
p1.falar();
p1.beber();
p1.comer();
// É possível sobrescrever o prototype de uma classe
Pessoa.prototype.falar = function(){
    console.log('Está calado...');
}
const p2 = new Pessoa('Beltrano', 'Pereira');
console.log(p2);
p2.falar();
p2.beber();
p2.comer();