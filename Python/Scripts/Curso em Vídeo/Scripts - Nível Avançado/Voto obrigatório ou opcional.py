print('Diga o ano de nascimento de uma pessoa e descubra se ela tem que votar ou não.')


def voto(num):
    from datetime import datetime
    if 70 > datetime.now().year - num > 18:
        print(f'Com {datetime.now().year-num} anos: VOTO OBRIGATÓRIO.')
    elif datetime.now().year - num < 16:
        print(f'Com {datetime.now().year - num} anos: VOTO PROIBIDO.')
    else:
        print(f'Com {datetime.now().year-num} anos: VOTO OPCIONAL.')

voto(int(input('Ano de nascimento: ')))
