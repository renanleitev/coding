# from datetime import datetime
# print('Leia o nome, o ano de nascimento e o número da CTPS.')
# print('Depois, calcule a idade para se aposentar.')
# nome = str(input('Nome: '))
# idade = datetime.now().year - int(input('Ano de Nascimento: '))
# CTPS = int(input('CTPS (Digite 0 se não tiver): '))
# if CTPS == 0:
#     print('-'*30)
#     print('FICHA PESSOAL')
#     ficha01 = {'Nome': nome, 'Idade': idade, 'CTPS': CTPS}
#     print('-' * 30)
#     for k, v in ficha01.items():
#         print(f'{k}: {v}')
# else:
#     anocontr = int(input('Ano de Contratação: '))
#     sal = float(input('Salário: '))
#     aposentadoria = 25 + (datetime.now().year - anocontr)
#     print('-' * 30)
#     print('FICHA PESSOAL')
#     print('-' * 30)
#     ficha02 = {'Nome': nome, 'Idade': idade, 'CTPS': CTPS,
#                'Ano de Contratação': anocontr, 'Salário': sal,
#                'Aposentadoria': aposentadoria}
#     for k, v in ficha02.items():
#         print(f'{k}: {v}')
        
from datetime import datetime
dia = datetime.now().day
mes = datetime.now().month
ano = datetime.now().year
data = f'{dia}-{mes}-{ano}'
print(data)