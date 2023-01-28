/*
IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida. 
É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. 
A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses.
Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.
A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.
*/
(function(){
    const nome = 'Fulano';
    console.log(nome);
})();
try{console.log(nome);}
catch{console.log("Erro, pois a a variável possui escopo local, não há variável global.")}
// É possível utilizar parâmetros imediatamente nos parentêses finais ()
(function(idade, peso, altura){
    console.log(idade, peso, altura);
})(23, 95, 1.76);
try{console.log(idade, peso, altura);}
catch{console.log("Erro, pois os parâmetros possuem escopo local.");}