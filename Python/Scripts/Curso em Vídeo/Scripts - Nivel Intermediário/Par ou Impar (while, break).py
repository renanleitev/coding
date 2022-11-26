print('Vamos jogar par ou ímpar.')
import random
cont = 0
while True:
    jogesc = input('Você escolhe par ou ímpar? [P/I] ').lower().strip()
    if jogesc in ['p', 'i']:
        jognum = input('Diga um número entre 0 e 10: ')
        while not jognum.isnumeric() or int(jognum) < 0 or int(jognum) > 10:
            print('Erro. Digite um número entre 0 e 10:')
            jognum = input('Diga um número entre 0 e 10: ')
        compnum = random.randint(0, 10)
        if compnum % 2 == 0:
            compesc = 'p'
        elif compnum % 2 == 1:
            compesc = 'i'
        soma = int(jognum) + compnum
        if soma%2 == 0 and jogesc == compesc or soma%2 == 1 and jogesc == compesc:
            print(f'Você jogou {int(jognum)}. O computador jogou {compnum}. Deu empate.')
            print('Vamos jogar novamente.')
        elif soma%2 == 0 and jogesc == 'p':
            print('Você venceu!')
            print(f'Você jogou {int(jognum)}. O computador jogou {compnum}. Total deu {soma}, que é par. ')
            print('Vamos jogar novamente.')
            cont += 1
        elif soma%2 == 1 and jogesc == 'i':
            print('Você venceu!')
            print(f'Você jogou {int(jognum)}. O computador jogou {compnum}. Total deu {soma}, que é ímpar. ')
            print('Vamos jogar novamente.')
            cont += 1
        else:
            if soma%2 == 0:
                print(f'Você jogou {int(jognum)}. O computador jogou {compnum}. Total deu {soma}, que é par. ')
                print(f'Você perdeu. Você ganhou {cont} vez(es).')
                break
            if soma%2 == 1:
                print(f'Você jogou {int(jognum)}. O computador jogou {compnum}. Total deu {soma}, que é ímpar. ')
                print(f'Você perdeu. Você ganhou {cont} vez(es).')
                break
    else:
        print('Erro. Tente novamente.')