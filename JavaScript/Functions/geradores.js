/*
! return:
- Há apenas um return por função
- Utilizado quando é preciso exportar um valor
- Quando chamado, encerra a função (nada abaixo é executado)
! yield:
- É possível ter vários yield na mesma função
- Utilizado para segurar um valor em um gerador
- Não encerra a função (o que estiver abaixo é executado)
*/
// ! Gerador: É preciso colocar um * no nome 'function'
function* gerador(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}
const g1 = gerador();
const g2 = gerador();
const g3 = gerador();
// ! O gerador informa o valor e se chegou ao fim (true or false)
console.log('Primeiro gerador');
console.log(g1); // Object [Generator] {}
console.log(g1.next()); // { value: 'valor 1', done: false }
console.log(g1.next()); // { value: 'valor 2', done: false }
console.log(g1.next()); // { value: 'valor 3', done: false }
console.log(g1.next()); // { value: undefined, done: true }
// ! O laço for sabe quando termina o gerador
console.log('Segundo gerador');
for (let item of g2){
    console.log(item);
}
// valor 1
// valor 2
// valor 3
// ! Obtendo apenas os valores
console.log('Terceiro gerador');
console.log(g3.next().value); // { value: 'valor 1', done: false }
console.log(g3.next().value); // { value: 'valor 2', done: false }
console.log(g3.next().value); // { value: 'valor 3', done: false }
console.log(g3.next().value); // { value: undefined, done: true }
// ! É possível segurar (yield) funções
console.log('Quarto gerador');
function* geradorFuncao(){
    yield function(){
        console.log('Primeira função');
    }
    yield function(){
        console.log('Segunda função');
    }
}
const funcao = geradorFuncao();
const func1 = funcao.next().value;
const func2 = funcao.next().value;
func1();
func2();