const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} 
else if (grade === 10) {
    console.log("Passing on the limit");
} 
else {
    console.log("Failing grade");
}

function booleano(numero){
    return numero >= 10
}

console.log(booleano(7))
console.log(booleano(70))