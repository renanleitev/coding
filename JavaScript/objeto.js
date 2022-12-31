// ! É semelhante a um dicionário do Python
// let amigo1 = {nome: "José", idade: 25, peso: 92.6}
// console.log(amigo1.nome)
// console.log(amigo1.idade)
// console.log(amigo1.peso)

// ! É possível armazenar funções
// let amigo2 = {nome: "Pedro", idade: 55, peso: 72.4, amizade(){return amigo2.nome}}
// console.log(amigo2.amizade())

// ! É possível utilizar elementos dentro do dicionário nas funções
let amigo3 = {peso: 56.7, 
    engorda(p = 0){
        this.peso += p;
        return this.peso
    }}
console.log(amigo3.engorda(3))