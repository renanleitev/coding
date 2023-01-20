// Objeto
const pessoa = {
    // Atributos
    nome: "Fulano",
    sobrenome: "De tal",
    idade: 23,

    // Métodos
    fala(){
        console.log(`${this.nome} está falando.`)
    },
    
    aniversario(){
        console.log(`Você tem ${this.idade} anos.`)
        this.idade++
        console.log(`Parabéns! Você tem ${this.idade} anos.`)
    }
}

console.log(pessoa.idade)
pessoa.fala()
pessoa.aniversario()

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}
// Instanciação
const pessoa1 = criaPessoa("Beltrano", "Silva", 44)
console.log(pessoa1.nome)
