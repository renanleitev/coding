// Se não houver uma condição para sair, a função é executada infinitamente
function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);