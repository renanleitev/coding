from conta import Conta


class Corrente(Conta):
    def __init__(self, agencia, conta, saldo, limite=100):
        # Setter
        super().__init__(agencia, conta, saldo)
        self._limite = limite

    @property
    def limite(self):
        return self._limite

    def sacar(self, valor):
        if (self.saldo + self.limite) < valor:
            print('Saldo insuficiente')
            return
        self.saldo -= valor
        self.detalhes()


class Poupanca(Conta):
    def sacar(self, valor):
        if self.saldo < valor:
            print('Saldo insuficiente')
            return
        self.saldo -= valor

# cp = Poupanca(1110, 2222, 0)
# cp.depositar(5)
# cp.sacar(5)
# cp.sacar(5)


print('Bem vindo. Informe sua agência, o número da conta e o saldo anterior.')
cc = Corrente(agencia=input('Nome da Agência: '),
              conta=input('Nome da Conta: '),
              saldo=int(input('Saldo Anterior: ')))
while True:
    print('Bem vindo ao banco. O que deseja fazer?')
    print('[1] para depositar')
    print('[2] para sacar')
    print('[3] para encerrar')
    q = input('Sua opção: ')
    if not q.isnumeric() or int(q) < 0 or int(q) > 3:
        print('Opção inválida. Tente novamente.')
    elif int(q) == 1:
        cc.depositar(int(input('Diga quanto quer depositar: ')))
    elif int(q) == 2:
        cc.sacar(int(input('Diga quanto quer sacar: ')))
    elif int(q) == 3:
        print('FIM')
        break
