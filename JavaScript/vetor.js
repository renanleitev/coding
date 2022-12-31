// Vetor simples
let vetor = [5, 6, 7, 8, 9, 10, 11]
console.log("Vetor Simples")
for (var i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}

// Adicionando valores ao vetor
console.log("Adicionando valores...")
vetor[8] = 14
for (var i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}
// ! Obs: Se não tiver valor declarado, é "undefined"

// Adicionando valores no final do vetor
// console.log("No final do vetor...")
// vetor.push(33)
// for (var i = 0; i < vetor.length; i++){
//     console.log(vetor[i])
// }

// For simplificado
// console.log("For simplificado...")
// for(let pos in vetor){
//     console.log(vetor[pos])
// }
// ! Obs: Aqui, o "undefined" não é exibido

// Obtendo valores por indices
var erro = vetor.indexOf("undefined")
console.log(erro)
// Obs: Quando o valor não existe, retorna o valor -1
var correto = vetor.indexOf(8)
console.log(correto)
