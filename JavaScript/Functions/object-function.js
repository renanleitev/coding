// É possível declarar uma função como propriedade de um objeto
const objeto = {
    falar: function(){
        console.log("Isso é uma função dentro de um objeto.");
    },
    simples(){
        console.log("É possível declarar sem usar os dois pontos.")
    } 
};
objeto.falar();
objeto.simples();