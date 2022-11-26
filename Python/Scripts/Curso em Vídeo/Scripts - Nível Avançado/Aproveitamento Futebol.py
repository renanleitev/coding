print('Diga o nome de um jogador e quantas partidas ele jogou. Depois, digite quantos gols ele fez por partida. O aproveitamento será exibido no final.')
total = []
listanome = []
listasoma = []
listapartidas = []
count = soma = 0
while True:
    nome = input('Nome: ')
    while not nome.isalpha():
        nome = input('Erro. Nome: ')
    listanome.append(nome)
    partidas = input('Quantas partidas jogou? ')
    while not partidas.isnumeric() or int(partidas) < 0:
        partidas = input('Erro. Quantas partidas jogou? ')
    listapartidas.append(int(partidas))
    listagol = []
    for _ in range(int(partidas)):
        gol = input(f'Quantos gols ele fez na partida {count}? ')
        while not gol.isnumeric() or int(gol) < 0:
            gol = input(f'Erro. Quantos gols ele fez na partida {count}? ')
        listagol.append(int(gol))
        soma += int(gol)
        count += 1
    listasoma.append(soma)
    soma = count = 0
    jogador = {'Nome': nome, 'Partidas': partidas, 'Gols': listagol}
    total.append(jogador)
    r = input('\nQuer continuar? [S/N] ').lower().strip()
    if r not in ['s', 'n']:
        print('Digite uma opção válida.')
    elif r == 's':
        continue
    elif r == 'n':
        break
print('-' * 30)
print('LEVANTAMENTO DO JOGADOR')
print('-' * 30)
for item in listanome:
    print(f'Nº {count}: O jogador {listanome[count]} fez os seguintes gols: {total[count]["Gols"]}, totalizando {listasoma[count]} gols.')
    count += 1
while True:
    print('-' * 30)
    q = input('Mostrar dado de qual jogador (Nº 0, 1, 2...)? 999 encerra o programa: ')
    while not q.isnumeric() or int(q) < 0 or int(q) > len(listanome):
        q = input('Erro. Mostrar dado de qual jogador (Nº 0, 1, 2...)? 999 encerra o programa: ')
    if int(q) == 999:
        print('FIM')
        break
    else:
        count = 0
        print(f'Jogador {listanome[int(q)]}:')
        for c in range(listapartidas[int(q)]):
            print(f'No {count+1}º jogo fez {total[int(q)]["Gols"][count]} gols.')
            count += 1

