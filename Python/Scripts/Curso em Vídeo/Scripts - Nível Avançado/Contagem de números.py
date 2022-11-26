from time import sleep

# def conta01(num):
#     print('-'*30)
#     print('Contagem de 1 até 10:')
#     for num in range(1, 11):
#         print(num, end=' ')
#         sleep(0.3)
#     print('')
#
#
# def conta02(num):
#     print('-' * 30)
#     print('Contagem de 10 até 0 de 2 em 2:')
#     for num in range(10, -2, -2):
#         print(num, end=' ')
#         sleep(0.3)
#     print('')


def conta03(a, b, p):
    if p > 0:
        print('-' * 30)
        print(f'Contagem de {a} até {b} de {p} em {p}:')
        for num in range(a, b+1, p):
            print(num, end=' ')
            sleep(0.3)
        print('')
    if p < 0:
        print('-' * 30)
        print(f'Contagem de {a} até {b} de {p} em {p}:')
        for num in range(a, b, p):
            print(num, end=' ')
            sleep(0.3)
        print('')
    if p == 0:
        if a > b:
            print('-' * 30)
            print(f'Contagem de {a} até {b} de {p} em {p}:')
            for num in range(a, b-1, -1):
                print(num, end=' ')
                sleep(0.3)
            print('')
        if b > a:
            print('-' * 30)
            print(f'Contagem de {a} até {b} de {p} em {p}:')
            for num in range(a, b):
                print(num, end=' ')
                sleep(0.3)
            print('')


# conta01(10)
# conta02(10)

while True:
    print('-' * 30)
    print('Personalize a sua contagem: ')
    conta03(a=int(input('Início: ')), b=int(input('Fim: ')), p=int(input('Passo: ')))
    print('-' * 30)
    r = str(input('Quer continuar? [S/N] ')).lower().strip()
    if r == 'n':
        print('FIM')
        break
