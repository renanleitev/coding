/*
TRUE FALSE = false
---
FALSY = {
    0
    "" 
    ''
    ``
    null
    undefined
    NaN
}
*/ 
// Operador &&
// Tudo verdadeiro = Retorna o último valor verdadeiro
// Pelo menos um falso = Retorna o primeiro falso
console.log("Luiz" && "Maria") // Maria
console.log("Luiz" && 0 && "Maria") // 0
console.log("Luiz" && 0 && "Maria" && null) // 0
// Executa a segunda opção
function teste(){
    return "Retornou"
}
let valorFalso = false
let valorVerdadeiro = true
console.log(valorFalso && teste()) // false
console.log(valorVerdadeiro && teste()) // Retornou
console.log(teste() && valorFalso) // false
console.log(teste() && valorVerdadeiro) // true
// Operador ||
// Pelo menos um verdadeiro = Retorna o primeiro verdadeiro
// Todos falsos = Retorna o último falso
console.log(0 || null || "Retornou" || undefined) // Retornou
console.log(0 || null || "Retornou" || undefined || "Teste") // Retornou
console.log(0 || null || undefined) // undefined
// Exemplo = Escolhas e Padrões
let corUsuario = null // azul
let corPadrao = corUsuario || "branco"
console.log(corPadrao) // azul

