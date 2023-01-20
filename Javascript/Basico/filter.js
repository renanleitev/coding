const numbers = [9, 5, 14, 3, 11];
// Filter completo
const numbersAboveTen = numbers.filter(
    function(number) {
        console.log("chamando");
        return number > 10;
    }
);
console.log(numbersAboveTen); // [14, 11]
// Filter com arrow function
const numerosAcimaDez = numbers.filter(number => number > 10);
console.log(numerosAcimaDez);