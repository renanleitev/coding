p = 0
lista = [1, 2, 3]

def menu():
    global p
    while True:
        arquivo = open("cadastro.txt", "a")
        print('-'*30)
        print('     MENU PRINCIPAL')
        print('-' * 30)
        print('1 - Ver pessoas cadastradas')
        print('2 - Cadastrar nova pessoa')
        print('3 - Sair do sistema')
        print('-' * 30)
        p = int(input('Sua opção: '))
        if p not in lista:
            print('Opção inválida. Tente novamente.')
            input('Pressione qualquer tecla para continuar.')
        if p == 1:
            print('-' * 30)
            print('     PESSOAS CADASTRADAS')
            print('-' * 30)
            arquivo = open("cadastro.txt", "r")
            r = arquivo.readlines()
            for line in r:
                print(line, end='')
            print('-' * 30)
            input('Pressione qualquer tecla para continuar. ')
        if p == 2:
            while True:
                while True:
                    arquivo = open("cadastro.txt", "a")
                    a = str(input('Nome: '))
                    if a.isalpha() or " " in a:
                        arquivo.write(f'{a: <23}')
                        break
                    else:
                        print('Erro. Tente Novamente.')
                while True:
                    arquivo = open("cadastro.txt", "a")
                    b = input('Idade: ')
                    if b.isnumeric():
                        arquivo.write(f'{b} anos\n')
                        break
                    else:
                        print('Erro. Tente Novamente.')
                print(f'Novo registro de {a} cadastrado com sucesso.')
                input('Pressione qualquer tecla para continuar. ')
                break
        if p == 3:
            print('-' * 30)
            print('     SAINDO DO SISTEMA')
            print('-' * 30)
            break





