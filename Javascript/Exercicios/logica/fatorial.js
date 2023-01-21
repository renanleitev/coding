function retornaFatorial(num){
    let fatorial = 1;
    let voltas = num;
    for(let i = 0; i < voltas; i++){
        fatorial *= num;
        num--;
    }
    return fatorial;
}
console.log(retornaFatorial(6));