#Primeira Solução:
# print('Descubra se um número é primo ou não. ')
# A = int(input('Diga um número inteiro: '))
# tot = 0
# for c in range (1, A + 1):
#     if A%c == 0:
#         tot += 1
# print(f'O número {A} foi divisível {tot} vezes.')
# if tot == 2:
#     print('Então ele é primo!')
# else:
#     print('Então ele não é primo.')

#Segunda Solução:
# print(('Descubra se um número é primo ou não. '))
# A = int(input('Diga um número inteiro: '))
# PRIMO = True
# if A == 0 or A == 1:
#     print('O número é primo? False. ')
# else:
#     for c in range(2, A):
#         if A%c == 0:
#             PRIMO = False
#     print(f'O número é primo? {PRIMO}.')

#Terceira Solução:
num = int(input('Digite um número: '))
count = 0
for c in range(1, num+1):
    if num % c == 0:
        count += 1
print('Este número é primo.' if count == 2 else 'Este número não é primo.')
