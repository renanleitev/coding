A = int(input('Diga um número inteiro: '))
B = int(input('Digite 1 para converter em binário, 2 em octal e 3 em hexadecimal: '))
ABIN = bin(A).removeprefix('0b')
AOCTAL = oct(A).removeprefix('0o')
AHEXA = hex(A).removeprefix('0x')
if B == 1:
    print(f'O número {A} em binário é {ABIN}.')
elif B == 2:
    print(f'O número {A} em octal é {AOCTAL}.')
elif B == 3:
    print(f'O número {A} em hexadecimal é {AHEXA}.')
else:
    print('Você digitou o número errado. Tente novamente.')