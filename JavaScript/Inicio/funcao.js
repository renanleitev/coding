// ! Passando parâmetros para funções
// function parimpar(n){
//     if (n % 2 == 0) return "par"
//     else return "impar"
// }
// console.log(parimpar(5))

// ! Fazendo cálculos com funções
// function soma(n1, n2){
//     var resultado = Number(n1) + Number(n2)
//     return resultado
// }
// console.log(soma(2, 4))

// ! Parâmetros opcionais
// function soma(n1=0, n2=0){
//     var resultado = Number(n1) + Number(n2)
//     return resultado
// }
// console.log(soma(4))

// ! É possível atribuir uma variável para uma função
let variavel = function(n) {
    return n*2
}
console.log(variavel(5))