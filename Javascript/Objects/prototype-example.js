function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.desconto = (obj, percentual) => obj.preco -= (obj.preco * (percentual/100));
Produto.prototype.aumento = (obj, percentual) => obj.preco += (obj.preco * (percentual/100));
const p1 = new Produto('Camiseta', 50);
p1.desconto(p1, 10);
p1.aumento(p1, 10);
console.log(p1);
// Criando um objeto literal, com as mesma chaves de Produto
const p2 = {
    nome: 'Caneca',
    preco: 20,
};
// Objeto p2 "herdando" o prototype de Produto
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(p2, 10);
console.log(p2);
// Criando um objeto e "herdando" o prototype de Produto
const p3 = Object.create(Produto.prototype);
p3.nome = 'Calça';
p3.preco = 300;
p3.aumento(p3, 10);
console.log(p3);
// É possível criar as chaves junto com o prototype (opcional)
const p4 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Cortina',
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 70,
    },
});
p4.aumento(p4, 10);
console.log(p4);