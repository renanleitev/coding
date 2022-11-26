print('Digite quantos números quiser. ')
s = c = 0
listanum = []
while True:
    n = input('Digite um número: ')
    while not n.isnumeric():
        print('Erro. Digite um número válido:')
        n = input('Digite um número: ')
    listanum.append(int(n))
    s += int(n)
    c += 1
    media = s / c
    r = input('Você quer continuar? [S/N] ').lower().strip()
    if r == 's':
        continue
    elif r == 'n':
        print('FIM DO PROGRAMA.')
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
print(f'O maior número é {max(listanum)}. ')
print(f'O menor número é {min(listanum)}. ')
print(f'A média entre os números é {media}. ')


