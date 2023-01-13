const numbers = [10, 8, 13, 15];
const texto = ["Qualquer", "Coisa"];
console.log(numbers.push(20)); 
console.log(numbers);
console.log(texto.push("Adicional"));
console.log(texto)

const primeiro = [1, 2]
const segundo = primeiro
segundo.push(3)
// Ambos recebem os mesmos valores
console.log(primeiro, segundo)

const lista = [10, 20]
lista.unshift(50)
lista[lista.length] = 30
console.log(lista)
console.log(lista.pop())
console.log(lista)
delete lista[1]
console.log(lista)
console.log(lista[1])
console.log(lista[100])