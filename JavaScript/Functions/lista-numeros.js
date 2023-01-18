function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const lista = [];
for(let i = 0; i < 10; i++){
    lista.push(aleatorio());
}
console.log(lista);