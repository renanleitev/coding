from time import sleep
import random
print('Escolha quantos jogos serão sorteados na Mega Sena.')
print('O computador vai gerar cartelas de 06 números sorteados de 01 a 60.')
# Primeira Solução:
n = input('Quantos jogos você quer gerar? (Máximo: 10 jogos) ')
while not n.isnumeric() or int(n) < 0 or int(n) > 10:
    n = input('Erro. Quantos jogos você quer gerar? (Máximo: 10 jogos) ')
lista = []
count = 1
if int(n) == 0 or int(n) < 0:
    print('Nenhuma cartela foi gerada.')
for _ in range(int(n)):
    for _ in range(100):
        a = random.randint(1, 60)
        if a not in lista:
            lista.append(a)
    if int(n) == 1:
        print(f'A cartela escolhida é: {lista[:6]}.')
    if int(n) > 1:
        for _ in range(int(n)-1, int(n)):
            print(f'A {count}ª cartela escolhida é: {lista[(0 + 6 * (count - 1)):(6 + 6 * (count - 1))]}.')
            sleep(1)
            count += 1
print('Boa sorte!')

# Segunda Solução:
# from time import sleep
# from random import randint
# jogo = list()
# quant = int(input('Quer gerar quantos jogos? '))
# for j in range(0, quant):
#     while len(jogo) < 6:
#         n = randint(1, 60)
#         if n not in jogo:
#             jogo.append(n)
#     print(f'Jogo {j+1}: {sorted(jogo)}')
#     sleep(.5)
#     jogo.clear()

# Terceira Solução:
# from random import sample
# q = int(input('Quantas apostas gerar? '))
# nums = [sample(range(1, 61), k=6) for x in range(0, q)]
# for i in range(0, q):
#     print(f'Aposta {i+1}: {sorted(nums)[i]}')

