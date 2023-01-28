/*
Callback é um tipo de função que só é executada após o processamento de outra função. 
Quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.
*/
// Gerando intervalos de tempo aleatórios, para simular ações com tempos de execução diferentes
function aleatorio(min = 1000, max = 2000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// Gerando três funções com tempo de execução diferentes
function a1(callback){
    setTimeout(function(){
        console.log("Primeira função está executando...");
        if (callback) callback();
    }, aleatorio());
};
function a2(callback){
    setTimeout(function(){
        console.log("Segunda função está executando...");
        if (callback) callback();
    }, aleatorio());
};
function a3(callback){
    setTimeout(function(){
        console.log("Terceira função está executando...");
        if (callback) callback();
    }, aleatorio());
};
// O console.log será executado primeiro, mas não há ordem de execução nas funções restantes
// a1();
// a2();
// a3();
// console.log("Não está inserido em uma função.");
// Para ordenar a execução das funções, utiliza-se uma função callback
// ! Não recomendado construir assim, pode resultar em "callback hell"
// a1(function(){
//     a2(function(){
//         a3(function(){
//             console.log("As funções estão sendo executadas em ordem.");
//         })
//     })
// });
// Construindo um callback de forma organizada
a1(a1Callback);
function a1Callback (){
    a2(a2Callback);
}
function a2Callback (){
    a3(a3Callback);
}
function a3Callback (){
    console.log("Callback executado de forma organizada.");
}