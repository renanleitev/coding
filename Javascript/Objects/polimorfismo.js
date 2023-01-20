// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`
        Ag/Conta: ${this.agencia}/${this.conta}
        Saldo: R$ ${this.saldo.toFixed(2)}
    `);
};

const conta1 = new Conta(11, 22, 100);
console.log(conta1);
conta1.depositar(10);
conta1.sacar(40);
conta1.sacar(80);

function ContaCorrente (agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
}

const cc1 = new ContaCorrente(77, 99, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(110);

function ContaPoupanca (agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(Conta.prototype);

ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp1 = new ContaPoupanca(45, 54, 0);
cp1.depositar(10);
cp1.sacar(110);
cp1.sacar(1);