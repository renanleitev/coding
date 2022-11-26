# Primeira Solução:
# lista = 'Pão', 1, 'Sal', 2, 'Água', 3, 'Açúcar', 2.5
# while True:
#     print('LISTA DE PREÇOS')
#     print('PRODUTO\t\t\tPREÇOS')
#     print(f'{lista[0]}\t\t\t\tR$ {float(lista[1])}')
#     print(f'{lista[2]}\t\t\t\tR$ {float(lista[3])}')
#     print(f'{lista[4]}\t\t\tR$ {float(lista[5])}')
#     print(f'{lista[6]}\t\t\tR$ {float(lista[7])}')
#     break

# Segunda Solução:
lista = 'Pão', 1, 'Sal', 2, 'Água', 3, 'Açúcar', 2.5
for pos in range(len(lista)):
    if pos%2 == 0:
        print(f'{lista[pos]:.<30}', end='')
    else:
        print(f'R${lista[pos]:>7.2f}')

