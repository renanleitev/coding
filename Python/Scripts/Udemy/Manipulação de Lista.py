# List Comprehension (manipulação de variável)

# numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# maiorque5 = [numero for numero in numeros if numero > 5]
# impar = [numero for numero in numeros if numero % 2 == 1]
# par = [numero for numero in numeros if numero % 2 == 0]
# outro = [numero if numero != 6 else 600 for numero in par]
# print(numeros)
# print(maiorque5)
# print(impar)
# print(par)
# print(outro)

# List Comprehension (manipulação de strings)

# palavra = input('Digite o seu nome completo: ')
# num = int(input('Digite quantas letras devem ficar em cada sílaba: '))
# novo = '.'.join([palavra[ind:ind+num] for ind in range(0, len(palavra), num)])
# print(palavra)
# print(novo)

nomes = ['luiz', 'renan', 'maria']
novo = [f'{nome[:-1].lower()}{nome[-1].upper()}' for nome in nomes]
print(novo)