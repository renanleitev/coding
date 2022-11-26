import random
import time

print('Pense em um número inteiro de 0 a 5.')
num = '0', '1', '2', '3', '4', '5'
A = random.choice(num)
B = input('Qual número você escolheu? ')
print("Eu vejo que...")
time.sleep(2)
if A == B:
    print(f'Você escolheu {B}. O número sorteado foi {A}. Parabéns! Você acertou!')
else:
    print(f'Você escolheu {B}. O número sorteado foi {A}. Trágico! Você errou!')
print('Até a próxima!')

