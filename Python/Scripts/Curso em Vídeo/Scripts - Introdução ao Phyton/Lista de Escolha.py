import random
A = str(input('Diga um nome: '))
B = str(input('Diga um nome: '))
C = str(input('Diga um nome: '))
D = str(input('Diga um nome: '))
lista= [A, B, C, D]
random.shuffle(lista)
print('O aluno escolhido é', random.choice(lista))
print('A ordem de apresentação é', lista)

