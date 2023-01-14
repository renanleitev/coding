// Try-catch = Funciona como se fosse um if-else
try {
    console.log('Até agora não houve erros. Só executa se não houver erros.')
    console.log(naoexisto);
    console.log('Ocorreu um erro. O restante do bloco try não é executado.')
} catch (error) {
    console.log('Ocorreu um erro. Executando bloco catch.');
} finally {
    console.log('Bloco finally é sempre executado.')
}
// Throw = Funciona apenas como uma mensagem de erro
function soma (x, y){
    if (typeof(x) !== 'number' || typeof(y) !== 'number'){
        // throw('Digite apenas números.')
        throw new ReferenceError('Digite apenas números.')
    }
    return x + y
}
console.log(soma(1, 2))
console.log(soma('a', 3))
