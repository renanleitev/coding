const numeros = [1, 2, 3];
// Declarando antes de desestruturar
let a = 'A'; let b = 'B'; let c = 'C';
[a, b, c] = numeros;
// Declarando ao mesmo tempo em que desestrutura
// const [primeiro, segundo] = numeros;
// Obtendo o resto dos elementos
const [primeiro, ...resto] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(primeiro);
console.log(resto);
// Saltando elementos (cada salto, uma vírgula)
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , três, , cinco] = lista;
console.log(um, três, cinco);


