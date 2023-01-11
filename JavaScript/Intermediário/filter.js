let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(
    function(number) {
        console.log("chamando");
        return number > 10;
    }
);
console.log(numbersAboveTen); // [14, 11]