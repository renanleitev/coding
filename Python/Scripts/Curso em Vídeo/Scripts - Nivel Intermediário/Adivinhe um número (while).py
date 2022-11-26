# Primeira Solução:
import random
num = '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
adv = input('Adivinhe um número inteiro de 0 a 10: ')
comp = random.choice(num)
tent = 0
while adv:
    if adv == comp:
        while adv == comp:
            print(f'Parabéns, você acertou! Você escolheu {adv} e o computador escolheu {comp}.')
            comp = random.choice(num)
            print(f'Você tentou {tent} vezes até acertar. ')
            adv = input('Adivinhe um número inteiro de 0 a 10: ')
    if adv != comp:
        while adv != comp:
            tent += 1
            print(f'Você errou. Você escolheu {adv} e o computador escolheu {comp}.')
            comp = random.choice(num)
            adv = input('Adivinhe um número inteiro de 0 a 10: ')

# Segunda Solução:
# from random import randint
# computador = randint(0, 10)
# acertou = False
# palpites = 0
# while not acertou:
#     jogador = int(input('Diga um número de 0 a 10: '))
#     palpites += 1
#     if jogador == computador:
#         acertou = True
#     else:
#         if jogador < computador:
#             print('Menos... Tente novamente. ')
#         elif jogador > computador:
#             print('Mais... Tente novamente. ')
# print(f'Você tentou {palpites} até acertar.')




