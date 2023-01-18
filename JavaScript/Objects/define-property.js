// É possível manipular propriedades específicas do objeto
// ! defineProperty
function Produto(nome, preco, estoque){
    // ! Definindo propriedade para o atributo estoque
    Object.defineProperty(this, 'estoque', {
        // enumerable = É possível exibir o valor? true or false
        enumerable: true,
        // value = Qual o valor desse atributo? Pode ser qualquer valor (string, number, null)
        value: null,
        // writable = É possível modificar o valor desse atributo? true or false
        writable: false,
        // configurable = É possível configurar (criar/apagar) essa propriedade? true or false
        configurable: false,
    });
    // ! Definindo propriedades para os atributos nome e preco
    Object.defineProperties(this, {
        nome: {
            // enumerable = É possível exibir o valor? true or false
            enumerable: true,
            // value = Qual o valor desse atributo? Pode ser qualquer valor (string, number, null)
            value: 'Calça',
            // writable = É possível modificar o valor desse atributo? true or false
            writable: false,
            // configurable = É possível configurar (criar/apagar) essa propriedade? true or false
            configurable: false,
        },
        preco: {
            // enumerable = É possível exibir o valor? true or false
            enumerable: true,
            // value = Qual o valor desse atributo? Pode ser qualquer valor (string, number, null)
            value: 301,
            // writable = É possível modificar o valor desse atributo? true or false
            writable: false,
            // configurable = É possível configurar (criar/apagar) essa propriedade? true or false
            configurable: false,
        },
    });
};
const p1 = new Produto('Camisa', 20, 3);
// estoque.writable = false
p1.estoque = 500;
// estoque.configurable = false
delete p1.estoque;
console.log(p1);