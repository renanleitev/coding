// Evitando que o atributo velocidadeProtegida seja alterado além do limite
// Symbol() = Tipo primitivo, gera uma identidade única para a variavel
const velocidadeProtegida = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[velocidadeProtegida] = 0;
    }
    get velocidade(){
        console.log('Getter');
        return this[velocidadeProtegida];
    }
    set velocidade(valor){
        console.log('Setter');
        if (valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[velocidadeProtegida] = valor;
    }
    acelerar(){
        if (this[velocidadeProtegida] >= 100) return;
        this[velocidadeProtegida]++;
    }
    freiar(){
        if (this[velocidadeProtegida] <= 0) return;
        this[velocidadeProtegida]--;
    }
}
const c1 = new Carro('Fusca');
// for (let i = 0; i <= 200; i++){
//     c1.acelerar();
// };
// A velocidadeProtegida máxima do carro é 100
console.log(c1);
// Mas é possível 'burlar' isso, atribuindo diretamente o valor
c1.velocidade = 200;
// Utilizando o Symbol(), o atributo velocidade fica protegido
console.log(c1);
console.log(c1.velocidade);
