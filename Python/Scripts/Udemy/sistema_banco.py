# Exercício que envolve classes, funções,
# listas, leitura e escrita de arquivos, etc.
# ! OBS: É um exercício para testar o conhecimento em Python, mas
# ! o código não está bem formatado/otimizado.
# Qualquer erro, favor entrar em contato.

print('Crie um sistema bancário, com cadastro de clientes e saque/depósito.')

""" Criando as classes. """


class Pessoa:

    def __init__(self, Nome, Idade):
        self._Nome = Nome
        self._Idade = Idade
        self._lista = {'Nome': Nome, 'Idade': Idade}

    def lista(self):
        return self._lista


class Cliente(Pessoa):

    def __init__(self, Agencia, Conta, Saldo):
        self._lista = {'Agencia': Agencia, 'Conta': Conta, 'Saldo R$': Saldo}

    def sacar(self, saque):
        self._saque = saque
        if saque > 1000:
            print('Erro. O seu limite diário é de R$ 1000,00 por saque.')
        elif self._lista['Saldo R$'] >= saque:
            self._lista['Saldo R$'] -= saque
        else:
            print('Dinheiro insuficiente.')

    def depositar(self, deposito):
        self._deposito = deposito
        self._lista['Saldo R$'] += deposito

    def saldo(self):
        return self._lista['Saldo R$']


""" Programa principal """
while True:
    try:
        A = Pessoa(Nome=str(input('Nome: ').upper().strip()),
                   Idade=int(input('Idade: ')))
        break
    except Exception:
        print('Erro. Tente novamente.')
        continue

if A._Idade < 18:
    print(A.lista())
    print('Cliente menor de idade. Não é possível criar uma conta.')
else:
    print('Cliente maior de idade. Por favor, insira os dados de sua conta.')
    while True:
        try:
            B = Cliente(int(input('Agencia (sem ponto ou vírgula): ')),
                        int(input('Conta (sem ponto ou vírgula): ')),
                        float(input('Saldo (use ponto para centavos): ')))
            break
        except Exception:
            print('Erro. Tente novamente.')
            continue
    A.lista()
    B.lista()
    A._lista.update(B._lista)
    print(f'{A._lista}')
    with open('cadastro.txt', 'a') as file:
        file.write(f'\n{str(A._lista)}')
    while True:
        r = input('Quer sacar [S], depositar [D] ou sair do sistema [X]? [S/D/X] ').upper().strip() # noqa
        file = open('cadastro.txt', 'a')
        if r == 'S':
            try:
                B.sacar(float(input('Quanto quer sacar? (em R$) ')))
                A._lista['Saldo R$'] = B.saldo()
                print(f'{A._lista}')
                file.write(f'\n{str(A._lista)}')
                continue
            except Exception:
                print('Erro. Tente novamente.')
                continue
        elif r == 'D':
            try:
                B.depositar(float(input('Quanto quer depositar? (em R$) ')))
                A._lista['Saldo R$'] = B.saldo()
                print(f'{A._lista}')
                file.write(f'\n{str(A._lista)}')
                continue
            except Exception:
                print('Erro. Tente novamente.')
                continue
        elif r == 'X':
            print('Fim do cadastro.')
            print(f'O saldo atual do cliente {A._Nome} é R$ {B.saldo():.02f}.')
            file.write(f'\n{str(A._lista)}')
            file.write('\n')
            file.close()
            break
        else:
            print('Erro. Escolha uma opção válida.')
            continue

""" Visualizar os clientes cadastrados (sem o uso de classes). """
while True:
    choice = input('Quer procurar outros clientes? [S/N] ').upper().strip()
    try:
        if choice == 'S':
            ask = input('Diga o nome do cliente: ').upper().strip()
            with open("cadastro.txt") as file:
                lista = [line for line in file if ask in line]
                print(lista[-1])
                lista = []
        elif choice == 'N':
            print('Fim.')
            break
        else:
            print('Erro. Tente novamente.')
            continue
    except Exception:
        print('Erro. Tente novamente.')
        continue

""" Realizar transações nas contas """
while True:
    conta = input('Diga o nome da conta ou digite [999] para sair: ').upper().strip()
    saldo = 0
    """ Obter o saldo da conta a partir de uma string """
    if conta.isalpha():
        try:
            with open("cadastro.txt") as file:
                lista = [line for line in file if conta in line]
                print(lista[-1])
                cliente = list(lista[-1])
                count = 0
                for c in cliente[cliente.index('.'):cliente.index('$'):-1]:
                    if c.isnumeric():
                        saldo += int(c)*(10**count)
                        count += 1
                if '.' in cliente:
                    count = 1
                    for c in cliente[cliente.index('.'):cliente.index('}')]:
                        if c.isnumeric():
                            saldo += int(c)/(10**count)
                            count += 1
                print(f'O seu saldo atual é R$ {saldo}. O que deseja fazer?')
                break
        except Exception:
            print('Erro. Tente novamente.')
            continue
    elif conta == '999':
        print('Fim')
        break
    else:
        print('Cliente não encontrado. Tente novamente.')
        continue

""" Com a conta obtida, realizar operações de saque, depósito ou saída. """
if conta.isalpha():
    while True:
        file = open('cadastro.txt', 'a')
        r = input('Quer sacar [S], depositar [D] ou sair do sistema [X]? [S/D/X] ').upper().strip() # noqa
        num = 0
        if r == 'S':
            try:
                num += 1
                saque = float(input('Quanto quer sacar? (em R$) '))
                if saldo >= saque:
                    saldo -= saque
                    print(f'Saque de R$ {saque:.02f}. O saldo atual é R$ {saldo:.02f}.')
                    file.write(f'\nOperacao saque {num}: Saque de R$ {saque:.02f}. Saldo atual: R$ {saldo:.02f}.')
                else:
                    print('Saldo insuficiente.')
                continue
            except Exception:
                print('Erro. Tente novamente.')
                continue
        elif r == 'D':
            try:
                num += 1
                deposito = float(input('Quanto quer depositar? (em R$) '))
                saldo += deposito
                print(f'Depósito de R$ {deposito:.02f}. O saldo atual é R$ {saldo:.02f}.')
                file.write(f'\nOperacao deposito {num}: Deposito de R$ {deposito:.02f}. Saldo atual: R$ {saldo:.02f}.')
                continue
            except Exception:
                print('Erro. Tente novamente.')
                continue
        elif r == 'X':
            novo = cliente[:cliente.index('$')+4]
            novo.append(str(round(saldo, 2)) + '}')
            file.write(f'\n')
            for c in novo:
                file.write(str(c))
            file.close()
            print('Fim.')
            break
        else:
            print('Erro. Tente novamente.')
            continue
