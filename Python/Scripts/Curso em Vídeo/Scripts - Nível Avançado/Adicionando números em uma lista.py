print('Digite 05 números inteiros. Eles irão sair em ordem crescente.')
lista = []
while len(lista) < 6:
    n = input('Digite um valor: ')
    while not n.isnumeric():
        print('Erro. Digite um valor:')
        n = input('Digite um valor: ')
    if not lista or int(n) > lista[-1]:
        lista.append(int(n))
    else:
        pos = 0
        while pos < len(lista):
            if int(n) <= lista[pos]:
                lista.insert(pos, int(n))
                break
            pos += 1
print(f'Os valores digitados em ordem crescente são {lista}.')



