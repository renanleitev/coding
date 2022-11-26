def leiaint(num):
    while True:
        a = input(num)
        try:
            int(a)
            it_is = True
            print(f'Você digitou o número {a}.')
            break
        except ValueError:
            it_is = False
            print('Erro. Digite um número.')


n = leiaint('Digite um número: ')