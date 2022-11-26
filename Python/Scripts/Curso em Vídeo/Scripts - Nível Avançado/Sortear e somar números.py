import random

lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
listapar = []


def sortear(num):
    somapar = 0
    x = random.choice(lista)
    if x%2 == 0:
        listapar.append(x)
    print(x, end=' ')


def somapares(num):
    somapar = sum(c for c in listapar if c%2 == 0)
    print(somapar)


print('Os números sorteados foram:', end=' ')
for _ in range(5):
    sortear(0)
print('')
print('A soma dos números pares sorteados é:', end=' ')
somapares(0)




