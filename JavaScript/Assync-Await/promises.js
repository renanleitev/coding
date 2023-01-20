// Gerando um tempo aleatório entre 1 e 2 segundos
function aleatorio(min = 1000, max = 2000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// Simulando uma função que demora um tempo para ser executada
function esperaExecutar(msg, tempo, callback){
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, tempo);
}
// Aqui, as funções estão sendo executadas de forma aleatória
// esperaExecutar('primeira chamada', aleatorio());
// esperaExecutar('segunda chamada', aleatorio());
// esperaExecutar('terceira chamada', aleatorio());
// Executando em ordem, utilizando um callback (não é o ideal)
// esperaExecutar('primeira chamada', aleatorio(), function(){
//     esperaExecutar('segunda chamada', aleatorio(), function(){
//         esperaExecutar('terceira chamada', aleatorio());
//     });
// });
/*
! Promises
- resolve = Se o código funcionar, executa ele
- reject = Se o código der erro, não executa
- then = Se tudo estiver ok, executa outro código
! Obs: Pode haver vários thens em sequência!
- catch = Se tiver erro, executa outro código
! Obs: O que vier depois do erro não é executado!
*/ 
function esperaPromise(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof(msg) !== 'string') reject('Erro. Não é uma string.');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
const espera = esperaPromise('Frase 1', aleatorio())
    .then(resposta => {
        console.log(resposta);
        return esperaPromise(2222, aleatorio());
    })
    .then(resposta => {
        console.log(resposta);
        return esperaPromise('Frase 3', aleatorio());
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => console.log(e));
console.log(espera);
console.log('Outros códigos são executados antes das promises.');