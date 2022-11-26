import itertools
matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
spar = mai = scol = 0
for l, c in itertools.product(range(3), range(3)):
    matriz[l][c] = int(input(f'Digite um valor para [{l}, {c}]: '))
for l in range(3):
    for c in range(3):
        print(f'[{matriz[l][c]:^5}]', end='')
        if matriz[l][c]%2 == 0:
            spar += matriz[l][c]
    print()
print(f'A soma dos valores pares é {spar}.')
for l in range(3):
    scol += matriz[l][c]
print(f'A soma dos valores da terceira coluna é {scol}.')
for c in range(3):
    if c == 0 or matriz[l][c] > mai:
        mai = matriz[l][c]
print(f'O maior valor da segunda linha é {mai}.')
print( 'FIM')



