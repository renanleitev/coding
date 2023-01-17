function* geradorOriginal(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradorFinal(){
    yield* geradorOriginal();
    yield 3;
    yield 4;
    yield 5;
}
const g1 = geradorFinal();
for (let item of g1){
    console.log(item);
}