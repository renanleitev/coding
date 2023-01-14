const letras = ['a', 'b', 'c'];
// !! Laço for padrão
console.log('Laço padrão')
for (let i = 0; i < letras.length; i++){
    console.log(letras[i]);
}
// !! Laço for in
console.log('Laço for in')
for (let i in letras){
    console.log(letras[i]);
}
// !! Laço for of (ideal para strings)
console.log('Laço for of')
for (let i of letras){
    console.log(i);
}
console.log('Laço for of com string')
const palavra = 'qualquer';
for (let letra of palavra){
    console.log(letra);
}
