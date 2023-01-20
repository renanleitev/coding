// Ao criar um novo objeto, é gerado o prototype automaticamente
const objA = {
    chaveA: 'valor A',
};
const objB = {
    chaveB: 'valor B',
};
const objC = new Object();
objC.chaveC = 'valor C';
// O prototype do objB passa a ter os atributos de objA
Object.setPrototypeOf(objB, objA);
// O prototype do objC passa a ter os atributos de objB (que "herdou" de objA)
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveA);
// Visualizando o prototype dos objetos
console.log(Object.getPrototypeOf(objA)); // não tem prototype definido
console.log(Object.getPrototypeOf(objB)); // herdou objA
console.log(Object.getPrototypeOf(objC)); // herdou objB