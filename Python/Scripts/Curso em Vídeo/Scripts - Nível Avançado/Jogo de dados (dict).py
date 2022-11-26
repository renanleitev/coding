print('Jogo de dados por ordem de classificação (maior para o menor).')
from time import sleep
from random import randint
listajogador = []
lista = {'Jogador1': randint(1, 6), 'Jogador2': randint(1, 6), 'Jogador3': randint(1, 6), 'Jogador4': randint(1, 6)}
ordem = sorted(list(lista.values()), reverse=True)
for a, b in lista.items():
    print(f'{a}: {b}')
    sleep(1)
while ordem != []:
    for x, y in lista.items():
        try:
            if y == max(ordem):
                listajogador.append(x)
                ordem.remove(y)
        except Exception:
            break
ordem = sorted(list(lista.values()), reverse=True)
print('Ordem de Classificação:')
for c in range(4):
    print(f'{c+1}º lugar: {listajogador[c]} - {ordem[c]}')
    sleep(1)
print('FIM')
    