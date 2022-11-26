print('Descubra o fatorial de um número inteiro e positivo. ')
import math
A = int(input('Digite um número inteiro e positivo: '))
while True:
    while A:
        if A > 0:
            B = math.factorial(A)
            print(f'O fatorial de {A} é {B}.')
            A = int(input('Digite um número inteiro e positivo: '))
    print(f'O fatorial de {A} é 1. ')
    A = int(input('Digite um número inteiro e positivo: '))





