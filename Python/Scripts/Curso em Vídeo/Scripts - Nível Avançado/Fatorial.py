from math import factorial

def fatorial(num):
    if num >= 0:    
        print(f'O fatorial de {num} é {factorial(num)}.')
    else:
        print('Digite um número maior que 0.')
    if num == 0:
        print('0 X 1 = 1')
    else:
        for c in range(num, 0, -1):
            print(c, end='')
            if c > 1:
                print(' X ', end='')
            else:
                print(' ', end='')
                print(f'= {factorial(num)}')

while True:
    try: 
        fatorial(num=int(input('Diga um número e descubra seu fatorial: ')))
        break   
    except ValueError:
        input('Erro. Digite qualquer tecla para continuar. ')     

