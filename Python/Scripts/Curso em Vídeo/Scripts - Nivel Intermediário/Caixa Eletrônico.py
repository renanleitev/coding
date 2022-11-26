print('Você se dirige a um caixa eletrônico e deseja sacar o seu dinheiro.')
print('O caixa informa que possui cédulas de R$ 50.00, R$ 20.00, R$ 10.00 e R$ 1.00. ')

# Primeira Solução:
while True:
    valor = int(input('Qual valor você deseja sacar? R$ '))
    nota50 = valor // 50
    valor50 = valor - nota50 * 50
    nota20 = valor50 // 20
    valor20 = valor50 - nota20 * 20
    nota10 = valor20 // 10
    valor10 = valor20 - nota10 * 10
    nota01 = valor10 // 1
    valor01 = valor10 - nota01
    if valor50 == 0:
        print(f'Total de {nota50} cédulas de R$ 50.00.')
    elif valor20 == 0:
        print(f'Total de {nota50} cédulas de R$ 50.00 e {nota20} cédulas de R$ 20.00.')
    elif valor10 == 0:
        print(f'Total de {nota50} cédulas de R$ 50.00, {nota20} cédulas de R$ 20.00 e {nota10} cédulas de R$ 10.00.')
    elif valor01 == 0:
        print(f'Total de {nota50} cédulas de R$ 50.00, {nota20} cédulas de R$ 20.00, {nota10} cédulas de R$ 10.00 e {nota01} cédulas de R$ 1.00.')
    print('Volte sempre!')
    break

# Segunda Solução:
# valorSaque = int(input('Valor do saque: R$'))
# for nota in [50, 20, 10, 1]:
#     quantidade = valorSaque // nota
#     valorSaque = valorSaque % nota
#     if quantidade > 0:
#         print(f'{quantidade} notas de R$ {nota}')

# Terceira Solução:
# valor = int(input('Qual valor você quer sacar? R$'))
# total = valor
# ced = 50
# totced = 0
# while True:
#     if total >= ced:
#         total -= ced
#         totced += 1
#     else:
#         if totced > 0:
#             print(f'Total de {totced} cédulas de R$ {ced}.')
#         if ced == 50:
#             ced = 20
#         elif ced == 20:
#             ced = 10
#         elif ced == 10:
#             ced = 1
#         totced = 0
#         if total == 0:
#             break

