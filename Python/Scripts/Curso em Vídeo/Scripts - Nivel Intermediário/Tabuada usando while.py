# Primeira Solução:
# while True:
#     n = int(input('Diga um número qualquer: '))
#     r1 = n
#     r2 = n*2
#     r3 = n*3
#     r4 = n*4
#     r5 = n*5
#     r6 = n*6
#     r7 = n*7
#     r8 = n*8
#     r9 = n*9
#     r10 = n*10
#     print(f'A tabuada de {n} é {r1}->{r2}->{r3}->{r4}->{r5}->{r6}->{r7}->{r8}->{r9}->{r10}')
#     break

# Segunda Solução:

while True:
    n = int(input('Diga um número qualquer: '))
    if n < 0:
        break
    for c in range(1, 11):
        print(f'{n} X {c} = {c*n}')



