/*
array.splice(
    indice (a partir de onde começa a remover/adicionar)
    quantidade de elementos a remover (do indice em diante)
    elementos a inserir (strings, numbers, etc)
)
*/
const nomes = ['Alberto', 'Beltrano', 'Caio', 'Dimitri', 'Eneas'];
// Removendo um elemento, a partir do índice 4 do array
const removido1 = nomes.splice(4, 1);
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido1);
// Adicionando dois elementos, a partir do índice 4 do array
nomes.splice(4, 0, 'Fábio', 'Germana');
console.log('Array com elementos adicionados:', nomes);
// É possível adicionar de qualquer índice
nomes.splice(1, 0, 'Haroldo', 'Iago');
console.log('Array com elementos adicionados:', nomes);
// Removendo dois elementos, a partir do índice 3 do array
const removido2 = nomes.splice(3, 2);
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido2);
// Funciona com índices negativos (ordem inversa)
// Number.MAX_VALUE = Maior valor aceito pelo javascript 
const removido3 = nomes.splice(-2, Number.MAX_VALUE);
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido3);
// Removendo e adicionando ao mesmo tempo
const removido4 = nomes.splice(2, 2, 'Julia', 'Karine', 'Larissa');
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido4);
// Utilizando como pop()
const removido5 = nomes.splice(-1, 1);
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido5);
// Utilizando como shift()
const removido6 = nomes.splice(0, 1);
console.log('Array modificado:', nomes, 'Removidos pelo splice:', removido6);
// Utilizando como unshift()
nomes.splice(0, 0, 'Manoel');
console.log('Array modificado:', nomes);
// Utilizando como push()
nomes.splice(nomes.length, 0, 'Nicolas');
console.log('Array modificado:', nomes);