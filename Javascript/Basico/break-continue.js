// !! Obs: forEach não aceita break e continue!
const numeros = [0, 1, 2, 3, 4, 5];
for(let numero of numeros){
    if (numero === 2){
        console.log("Pulou o número 2")
        continue;
    }
    else if (numero === 4){
        console.log("Encontrou o número 4, saindo...")
        break;
    }
    console.log(numero);
}