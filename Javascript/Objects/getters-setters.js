// ! Constructor function
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // Protegendo o estoque original, com uma nova variável
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            // ! Obs: Nunca retorne this.estoque = Loop infinito!
            return estoquePrivado;
        },
        set: function(valor){
            // Previnindo erros
            if (typeof valor !== 'number'){
                throw new TypeError('Não é um número.');
            };
            estoquePrivado = valor;
        }
    });
};
// ! Factory function
function criaProduto(nome){
    return {
        get nome(){
            // ! Obs: Nunca retorne this.nome = Loop infinito!
            return nome;
        },
        set nome(valor){
            // Pode realizar qualquer operação com o novo valor
            nome = valor.replace('a', 'x');
        }
    }
};
const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
console.log('Estoque original:', p1.estoque);
p1.estoque = 500;
console.log('Estoque modificado:', p1.estoque);
// p1.estoque = '500';
// console.log('Estoque com erro:', p1.estoque);
const p2 = criaProduto('Calça');
console.log(p2.nome);
p2.nome = 'Bermuda';
console.log(p2.nome);