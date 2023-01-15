function mostraHora(){
    let data = new Date();
    console.log(data);
};
// setInterval = Executa uma função de X em X milisegundos, sem parar
// ! Obs: Não funciona com return!
// setInterval(mostraHora, 1000);
// Criando uma função temporária para exibir a função desejada
function retornaHora(){
    let data = new Date();
    return data;
};
const timer = setInterval(function(){console.log(retornaHora())}, 1000);
// setTimeout = Executa uma função após X milisegundos
// clearInterval = Interrompe a execução de uma função
setTimeout(() => {
    clearInterval(timer);
}, 5000);
/*
Resumindo: A função retornaHora (), armazenada na variável timer, irá ser executada
indefinidamente. Contudo, quando a função setTimeout for executada, após 5 segundos 
(5000 milisegundos), ela irá chamar a função clearInterval, que irá interromper o
funcionamento da função timer (retornaHora).
*/ 