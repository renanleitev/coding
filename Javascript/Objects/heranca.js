// Abstração "Mãe" => Produto (pode ter aumento/desconto)
// Abstração "Filhas" => camiseta = cor, caneca = material, estoque
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(valor){
    this.preco += valor;
};
Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};
// Camiseta
function Camiseta(nome, preco, cor){
    // O prototype de Produto não é herdado
    Produto.call(this, nome, preco);
    // Adicionando outras propriedades
    this.cor = cor;
};
// Passando o prototype de Produto para Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
// Corrigindo o método construtor do prototype para Camiseta
Camiseta.prototype.constructor = Camiseta;
// É possível sobrescrever o prototype herdado de uma function "Mãe"
Camiseta.prototype.aumento = (obj, percentual) => obj.preco += (obj.preco * (percentual/100));
// Instanciando um novo objeto
const camiseta = new Camiseta('Regata', 7.5, 'Azul');
// Prototype aumento novo, diferente do prototype de Produto
camiseta.aumento(camiseta, 10);
console.log(camiseta);
// Caneca
function Caneca(nome, preco, material, estoque){
    // O prototype de Produto não é herdado
    Produto.call(this, nome, preco);
    // Adicionando outras propriedades
    this.material = material;
    // Definindo getter e setter para estoque
    Object.defineProperty(this, 'estoque', {
        configurable: false,
        enumerable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};
// Passando o prototype de Produto para Caneca
Caneca.prototype = Object.create(Produto.prototype);
// Corrigindo o método construtor do prototype para Caneca
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca('Café', 12.7, 'Plástico', 5);
// Protype aumento igual ao de Produto
caneca.aumento(10);
console.log(caneca);
caneca.estoque = 10;
console.log(caneca.estoque);
caneca.estoque = 'sem estoque';
console.log(caneca.estoque);