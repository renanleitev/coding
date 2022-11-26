print('Diga o nome de um jogador e quantos gols ele fez na partida.')


def ficha(nome, gol):
    if nome == '' and gol == '':
        print('O jogador desconhecido fez 0 gols.')
    elif nome == '':
        print(f'O jogador desconhecido fez {gol} gols.')
    elif gol == '':
        print(f'O jogador {nome} fez 0 gols.')
    else:
        print(f'O jogador {nome} fez {gol} gols.')


ficha(nome=input('Nome: '), gol=input('Gols: '))
