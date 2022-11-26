# Primeira Solução:
print('Digite quatro números inteiros.')
num = (int(input('Digite um número: ')), int(input('Digite um número: ')), int(input('Digite um número: ')), int(input('Digite um número: ')))
print(f'Você digitou os valores {num}.')
print(f'O valor 9 apareceu {num.count(9)} vezes.')
if 3 in num:
    print(f'O valor 3 apareceu {num.index(3)+1}ª posição.')
else:
    print('O valor 3 não apareceu em nenhuma posição.')
print('Os valores pares digitados foram ', end='')
for n in num:
    if n%2 == 0:
        print(n, end='...')

# Segunda Solução:
# while True:
#     print('Digite quatro números inteiros.')
#     a = int(input('Digite um número: '))
#     b = int(input('Digite um número: '))
#     c = int(input('Digite um número: '))
#     d = int(input('Digite um número: '))
#     lista = [a, b, c, d]
#     count9 = 0
#     print(f'Os números escolhidos foram {lista}.')
#     if a == 3:
#         print('O valor 3 foi digitado na 1ª posição.')
#     if b == 3:
#         print('O valor 3 foi digitado na 2ª posição.')
#     if c == 3:
#         print('O valor 3 foi digitado na 3ª posição.')
#     if d == 3:
#         print('O valor 3 foi digitado na 4ª posição.')
#     if a == 9:
#         count9 += 1
#     if b == 9:
#         count9 += 1
#     if c == 9:
#         count9 += 1
#     if d == 9:
#         count9 += 1
#     if a % 2 == 0:
#         print(f'O número {a} é par.')
#     if b % 2 == 0:
#         print(f'O número {b} é par.')
#     if c % 2 == 0:
#         print(f'O número {c} é par.')
#     if d % 2 == 0:
#         print(f'O número {d} é par.')
#     print(f'O número 9 apareceu {count9} vez(es). ')






