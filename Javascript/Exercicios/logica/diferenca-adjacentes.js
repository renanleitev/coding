// Gerando uma lista de numeros aleatorios, entre 0 e 50
function aleatorio(min = 0, max = 50){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
const numeros = [];
for(let i = 0; i < 5; i++){
    numeros.push(aleatorio());
}
function diferencaAdjacentes(array){
    console.log(array);
    let maiorDiferenca = 0;
    for (let i = 0; i < array.length; i++){
        let diferenca = array[i+1] - array[i];
        if ((diferenca > 0) && (diferenca > maiorDiferenca)) maiorDiferenca = diferenca;
        if ((diferenca < 0) && (-(diferenca) > maiorDiferenca)) maiorDiferenca = -(diferenca);
    }
    return maiorDiferenca;
}
console.log(diferencaAdjacentes(numeros));