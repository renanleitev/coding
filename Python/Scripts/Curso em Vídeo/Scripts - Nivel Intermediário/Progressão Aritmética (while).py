print('Descubra os 10 primeiros termos de uma PA.')
while True:
    I = input('Diga o termo inicial: ')
    while not I.isnumeric():
        print('Erro. Digite um número válido.')
        I = input('Diga o termo inicial: ')
    R = input('Diga a razão: ')
    while not R.isnumeric():
        print('Erro. Digite um número válido.')
        R = input('Diga a razão: ')
    F = int(I) + 10 * int(R)
    for c in range(int(I), F, int(R)):
        print(c, end='...')
    A = input('\nVocê quer ver mais quantos termos além destes? ')
    while not A.isnumeric():
        print('Erro. Digite um número válido.')
        A = input('Você quer ver mais quantos termos além destes? ')
    N = int(A) + 10
    F = int(I) + N*int(R)
    for c in range(int(I), F, int(R)):
        print(c, end='...')
    r = input('\nQuer continuar? [S/N] ').lower().strip()
    if r == 's':
        continue
    elif r == 'n':
        print('\nFIM DO PROGRAMA.')
        break
    else:
        while r != 'n':
            print('\nDigite uma opção válida.')
            r = input('\nQuer continuar? [S/N] ').lower().strip()
            if r == 's':
                break
        if r == 'n':
            print('\nFIM DO PROGRAMA.')
            break

