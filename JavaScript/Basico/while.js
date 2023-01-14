let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}

// Exercício com a função random
function random(min, max){
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}
const min = 1; const max = 10;
let numero = random(min, max);
// while (numero != 7){
//     numero = random(min, max);
//     console.log(numero);
// }
do{
    numero = random(min, max);
    console.log(numero);
}
while(numero!=7);