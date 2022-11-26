lista = 'lar', 'sal', 'pizza', 'pedra', 'sopa', 'tapioca', 'carne', 'salsicha', 'tomate', 'arroz', 'casa', 'boneca', 'brinquedo'
print('As vogais das palavras são:')
for c in lista:
    print(f'\nNa palavra {c.upper()} temos ', end='')
    for letra in c:
        if letra.lower() in 'aeiou':
            print(letra, end=' ')
