import datetime

print('Você recebe uma carta misteriosa do quartel. Você liga para o exército para saber se é hora de se alistar.')
A = int(input('Diga em que ano você nasceu: '))
B = int(2022-A)
C = int(18-B)
D = int(B-18)
if B <= 17:
    print(f'Você tem {B} anos. Ainda faltam {C} anos para você se alistar.')
elif B == 18:
    print(f'Você tem {B} anos. Você está na idade certa para se alistar.')
elif B > 18:
    print(f'Você tem {B} anos. Você devia ter se alistado a {D} anos atrás.')

