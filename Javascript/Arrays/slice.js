const nomes = ['Alberto', 'Beltrano', 'Caio', 'Dimitri', 'Eneas'];
/*
array.slice(
    inicio:
        - Se não for definido, o valor padrão é 0
        - O item do inicio é incluído no slice 
    final:
        - Se não for definido, o valor padrão é o final do array
        - O item do final não é incluído no slice
)
*/
const novo1 = nomes.slice(1, 4);
const novo2 = nomes.slice(1);
const novo3 = nomes.slice('', 3);
const novo4 = nomes.slice(0, -1);
const novo5 = nomes.slice(1, -2);
console.log(novo1); // [ 'Beltrano', 'Caio', 'Dimitri' ]
console.log(novo2); // [ 'Beltrano', 'Caio', 'Dimitri', 'Eneas' ]
console.log(novo3); // [ 'Alberto', 'Beltrano', 'Caio' ]
console.log(novo4); // [ 'Alberto', 'Beltrano', 'Caio', 'Dimitri' ]
console.log(novo5); // [ 'Beltrano', 'Caio' ]