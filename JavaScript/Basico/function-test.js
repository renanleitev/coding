function soma(x = 1, y = 1){
    return x + y
}

const raiz = function(n){
    return n**0.5
}

const parImpar = (n) =>{
    if(n % 2 === 0){
        return "par"
    }
    else{
        return "impar"
    }
}

const bomDia = n => `Bom dia ${n}!`

console.log(soma())
console.log(soma(4))
console.log(soma(4, 4))
console.log(raiz(25))
console.log(parImpar(-5))
console.log(bomDia("Renan"))