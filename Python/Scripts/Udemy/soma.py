# Função zip: junta duas listas, terminando no último elemento da lista menor

# lista01 = [5, 4, 6, 9, 5, 6, 7]
# lista02 = [1, 2, 3, 4]
# listasoma = [x + y for x, y in zip(lista01, lista02)]
# print(listasoma)

""" Dica:
Uma outra possibilidade é usar zip_longest para
capturar os valores da lista maior. """

from itertools import zip_longest

lista_a = [10, 2, 3, 4, 5]
lista_b = [12, 2, 3, 6, 50, 60, 70]
lista_soma = [x + y for x, y in zip_longest(lista_a, lista_b, fillvalue=0)]
print(lista_soma)  # [22, 4, 6, 10, 55, 60, 70]

""" Observação:
Neste caso, usamos o "fillvalue" como 0(zero),assim conseguimos capturar os valores
restantes da lista maior, realizando contas, sem obter um erro em nosso programa. """ # noqa