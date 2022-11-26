#Primeira Solução:
# soma = 0
# for c in range(0, 500):
#     if c%3 == 0 and c%2 == 1:
#         soma += c
# print(f'A soma de múltiplos de 3 e ímpar, entre o intervalo de 0 a 500, é {soma}.')

#Segunda Solução:
soma = 0
cont = 0
for c in range(1, 501, 2):
    if c%3 == 0:
        soma += c
        cont = cont + 1
print(f'A soma de {cont}, entre o intervalo de 0 a 500, é {soma}.')

# Somatório do primeiro e último número:
#print(range(0, 500)[0]+range(0, 500)[-1])


