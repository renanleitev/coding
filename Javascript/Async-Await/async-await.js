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
// Gerando uma função promise
function esperaPromise(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof(msg) !== 'string'){
            reject(false);
            // Para parar o código depois do erro
            return;
        } 
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - ' + 'Passou pela promise');
        }, tempo);
    });
}
// Usando thens encadeados (não é o ideal)
// esperaPromise('Fase 1', aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaPromise('Fase 2', aleatorio());
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaPromise('Fase 3', aleatorio());
//     })
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => console.log(e));
/*
! Async (funcao) - Await (variavel)
- Se houver erro, executa o que estiver ok antes e para no erro
- Não possui catch por padrão (tem que usar try/catch para pegar o erro)
*/ 
async function esperaAsync(){
    try{
        console.log('Executando a função async');
        // Se não tiver o await, a promise vai ficar pendente
        const fase0 = esperaPromise('Fase 0', aleatorio());
        console.log(fase0);
        // Executando as promises em ordem
        const fase1 = await esperaPromise('Fase 1', aleatorio());
        console.log(fase1);
        // Se houver erro, para o código
        const fase2 = await esperaPromise('Fase 2', aleatorio());
        console.log(fase2);
        const fase3 = await esperaPromise('Fase 3', aleatorio());
        console.log(fase3);
        // É possível obter o resultado de uma promise pendente
        setTimeout(function(){
            console.log('Essa promise estava pendente', fase0);
        }, 3000);
    }
    catch(e){
        console.log(e);
    }
}
esperaAsync();