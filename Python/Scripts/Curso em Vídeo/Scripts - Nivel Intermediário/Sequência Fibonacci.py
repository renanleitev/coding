print('Descubra a sequência de Fibonacci de um número inteiro qualquer. ')
n = int(input("Que termo deseja encontrar: "))

# Primeira Solução:
# while n:
#     a = 1
#     b = 1
#     if n == 1:
#         print('0')
#         n = int(input("Que termo deseja encontrar: "))
#     elif n == 2:
#         print('0', '1')
#         n = int(input("Que termo deseja encontrar: "))
#     else:
#         print('0')
#         print(a)
#         print(b)
#         for i in range(n - 3):
#             total = a + b
#             b = a
#             a = total
#             print(total)
#         n = int(input("Que termo deseja encontrar: "))

# Segunda Solução:
t1 = 0
t2 = 1
print(f'{t1}...{t2}', end='...')
for _ in range(3, n + 1):
    t3 = t1 + t2
    print(f'{t3}', end='...')
    t1 = t2
    t2 = t3
print('FIM')

