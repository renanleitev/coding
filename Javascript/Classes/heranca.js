class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if (this.ligado){
            console.log(this.nome, 'está ligado(a)');
        }
        else if (!this.ligado){
            this.ligado = true;
            console.log('Ligando', this.nome);
        }
    }
    desligar(){
        if (!this.ligado){
            console.log(this.nome, 'está desligado(a)');
        }
        else if (this.ligado){
            this.ligado = false;
            console.log('Desligando', this.nome);
        }
    }
}
const d1 = new DispositivoEletronico('TV');
console.log(d1);
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        // Chamando a classe 'Mãe' = DispositivoEletronico
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Samsung', 'Azul', 'S20 FE');
console.log(s1);
class Tablet extends DispositivoEletronico{
    constructor(nome, tela, bateria){
        super(nome);
        this.tela = tela;
        this.bateria = bateria;
    }
    // Sobrescrevendo o método ligar() da classe 'Mãe' = DispositivoEletronico
    ligar(){
        if (this.bateria <= 15){
            this.ligado = false;
            console.log('Não é possível ligar, a bateria está fraca...');
        }
        else {
            this.ligado = true;
            console.log('Ligando, tablet está carregado...');
        }
    }
    // É possível criar métodos exclusivos para as classes filhas
    ostentar(){
        console.log('Parabéns, você é rico! Você tem um(a)', this.nome);
    }
}
const t1 = new Tablet('Ipad', 'Full HD', 70);
console.log(t1);
// Utilizando o método ligar() sobrescrito (classe Tablet)
t1.ligar();
// Utilizando o método ligar() da classe 'Mãe' = DispositivoEletronico
t1.desligar();
t1.ostentar();