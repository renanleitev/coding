function jurosCompostos(capital, tempo, taxa){
    const montante = capital * ((1 + (taxa/100))**tempo);
    return montante.toFixed(2);
}
console.log(jurosCompostos(100, 2, 20));