const numbers = [4, 2, 5, 8];

const doubled = numbers.map(
    function(number) {
        console.log("chamando");
        return number * 2;
    }
);
console.log(doubled); // [8, 4, 10, 16]

const names = ["sam", "Alex"];
const upperNames = names.map(
    function(name) {
        console.log("chamando");
        return name.toUpperCase();
    }
);
console.log(upperNames);