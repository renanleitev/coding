# Primeira Solução: Usando set
# print('Digite quantos números inteiros quiser. Números repetidos não serão considerados.')
# valores = list()
# while True:
#     v = int(input('Digite um valor: '))
#     valores.append(v)
#     r = str(input('Você quer digitar mais um número? [S/N] ')).lower().strip()
#     if r == 'n':
#         valores.sort()
#         print(f'Os valores em ordem crescente são {set(valores)}.')
#         break

# Segunda Solução: Usando duas listas
# print('Digite quantos números inteiros quiser. Números repetidos não serão considerados.')
# valores = list()
# final = []
# while True:
#     v = int(input('Digite um valor: '))
#     valores.append(v)
#     r = str(input('Você quer digitar mais um número? [S/N] ')).lower().strip()
#     for num in valores:
#         if num not in final:
#             final.append(num)
#     if r == 'n':
#         final.sort()
#         print(f'Os valores em ordem crescente são {final}.')
#         break

# Terceira Solução: Usando apenas uma lista
print('Digite quantos números inteiros quiser. Números repetidos não serão considerados.')
num = []
while True:
    n = int(input('Digite um valor: '))
    if n not in num:
        num.append(n)
        print('Valor adicionado com sucesso.')
    else:
        print('Valor duplicado. Número não foi adicionado')
    r = str(input('Você quer digitar mais um número? [S/N] ')).lower().strip()
    if r in 'n':
        break
print(f'Você digitou {num}.')