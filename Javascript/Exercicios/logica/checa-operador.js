function checaOperador(x, y, resultado){
    if (x + y === resultado) return `${x} + ${y} = ${resultado}`;
    if (x - y === resultado) return `${x} - ${y} = ${resultado}`;
    if (x * y === resultado) return `${x} * ${y} = ${resultado}`;
    if (x / y === resultado) return `${x} / ${y} = ${resultado}`;
}
console.log(checaOperador(10, 30, 40));