function* geradorInfinito(){
    let i = 0;

    while (true){
        yield i;
        i++;
    }
}
const g1 = geradorInfinito();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());