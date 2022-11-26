while True:
    A = int(input('Diga um número inteiro: '))
    B = int(A%2)
    print (f'O número {A} é impar') if B == 1 else print (f'O número {A} é par')