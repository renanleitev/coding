lista = []
count = 0
while True:
    a = int(input('Diga qualquer número inteiro: '))
    lista.append(a)
    r = str(input('Você quer continuar? [S/N] ')).lower().strip()
    count += 1
    if r == 'n':
        lista.sort(reverse=True)
        print(f'A lista em ordem decrescente é {lista}. ')
        if 5 in lista:
            print('O número 5 está na lista. ')
        if 5 not in lista:
            print('O número 5 não está na lista.')
        break
print(f'Você digitou {count} número(s). ')
