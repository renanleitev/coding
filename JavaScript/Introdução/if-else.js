// Para executar = F8

var num = 700

// Para imprimir na tela
// console.log(num)

// Condição simples
// if (num < 200){
//     console.log("Menor que 200.")
// }
// else{
//     console.log("Maior que 200.")
// }

// Condição composta
if (num <= 200){
    console.log("Menor ou igual a 200.")
}
else if (num > 200 && num <= 300){
    console.log("Maior que 200 e menor ou igual a 300.")
}
else if (num > 300 && num <= 500){
    console.log("Maior que 300 e menor ou igual a 500.")
}
else{
    console.log("Maior que 500.")
}