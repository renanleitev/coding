def duplicado():
    print('Digite quantos números quiser para formar uma lista.')
    print('Encontre o primeiro número repetido de uma lista.')
    lista = []
    while True:
        n = input('Digite um número: ')
        if n.isnumeric():
            lista.append(n)
        else:
            print('Erro. Digite um número.')
            continue
        r = input('Quer continuar? [S/N] ').lower().strip()
        if r == 'n':
            break
    print(f'Lista original: {lista}')
    lista01 = []
    lista02 = []
    for c in lista:
        if c not in lista01:
            lista01.append(c)
        else:
            lista02.append(c)
    if not lista02:
        print('Não há termos repetidos.')
    else:
        print(f'O primeiro termo repetido da lista é {lista02[0]}.')


duplicado()

