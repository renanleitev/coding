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
// Gerando um array misto (strings + promises)
const promises = [
    // 'Primeiro valor',
    // Erro = Não é string
    esperaPromise(300, 3000),
    // O restante não é executado
    esperaPromise('Promise 2', 500),
    esperaPromise('Promise 3', 1000),
    // 'Outro valor'
]
/*
! Promise.all 
- Executa todas as promises armazenadas em um array
- Se houver erro, o código para e nada mais é executado
*/ 
Promise.all(promises)
    .then(function(valor){
        console.log('Promise.all:', valor);
    })
    .catch(function(erro){
        console.log('Promise.all:', erro);
    })
/*
! Promise.race
- Retorna apenas o elemento mais rápido do array (promise ou não)
- O restante do código continua executando, incluindo as promises
- Se houver erro, o código para e nada mais é executado
*/ 
Promise.race(promises)
    .then(function(valor){
        console.log('Promise.race:', valor);
    })
    .catch(function(erro){
        console.log('Promise.race:', erro);
    })
/*
! Promise.resolve
- Executa o then da promise (serve para checar se uma condição é true or false)
*/ 
function baixarPagina(){
    const foiBaixada = true;

    if(foiBaixada){
        // Se foiBaixada = true, executa imediatamente
        return Promise.resolve('Página foi baixada');
    }
    else {
        // Se foiBaixada = false, executa o then da promise
        return esperaPromise('Valido', 3000);
    }
}
baixarPagina()
    .then(dadosPagina => console.log('Promise.resolve - Executou o then:', dadosPagina))
    .catch(e => console.log('Promise.resolve - Executou o catch:', e));
/*
! Promise.reject
- Executa o reject da promise (serve para checar se uma condição é true or false)
*/ 
function baixarPagina(){
    const foiBaixada = false;

    if(foiBaixada){
        // Se foiBaixada = true, executa imediatamente
        return Promise.reject('Página foi baixada');
    }
    else {
        // Se foiBaixada = false, executa o then da promise
        return esperaPromise('Valido', 3000);
    }
}
baixarPagina()
    .then(dadosPagina => console.log('Promise.reject - Executou o then:', dadosPagina))
    .catch(e => console.log('Promise.reject - Executou o catch:', e));