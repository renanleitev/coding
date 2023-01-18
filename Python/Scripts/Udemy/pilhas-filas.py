""" Estruturas de pilhas e filas """

from collections import deque

# ! LIFO = Last in, first out:
# O último da pilha é o primeiro a sair
# Não modifica o índice, se remover o último item
# Ex: Livros = pilha (stack)
"""
livros = list()
livros.append('a')
livros.append('b')
livros.append('c')
livros.append('d')
livros.append('e')
livro_removido = livros.pop()
print(livros, livro_removido) """

# ! FIFO = First in, first out:
# Primeiro da fila é o primeiro a sair
# Modifica o índice, se remover o primeiro item
# Ex: Fila de banco = fila (queue)

# ! Usando a função deque (simples):

fila = deque()
fila.append('a')
fila.append('b')
fila.append('c')
fila.append('d')

# O primeiro item sai da lista
print(f'saiu {fila.popleft()}')

for nome in fila:
    print(nome)

# ! Usando a função deque (maxlen=3):
# ! Valor máximo da fila

fila = deque(maxlen=3)
fila.append('a')
fila.append('b')
fila.append('c')
fila.append('d')
fila.append('e')
fila.append('f')

# Os primeiros itens são eliminados
print(fila)

# Invertendo a lista
fila.reverse()
print(fila)
