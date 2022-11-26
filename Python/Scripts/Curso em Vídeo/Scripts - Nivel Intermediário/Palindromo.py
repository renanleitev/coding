# Primeira  Solução:
A = str(((input('Diga uma frase: '))).lower().strip())
B = A.split()
C = ''.join(B)
print(f'O inverso de {C} é {C[::-1]}.')
if C == C[::-1]:
    print('É palindromo. ')
else:
    print('Não é palindromo. ')

# #Segunda Solução:
# frase = str(input('Digite uma frase: ')).strip().upper()
# palavras = frase.split()
# junto = ''.join(palavras)
# inverso = ''
# for letra in range(len(junto) - 1, -1, -1):
#     inverso += junto[letra]
# print(f'O inverso de {junto} é {inverso}.')
# if inverso == junto:
#     print('É um palíndromo!')
# else:
#     print('Não é um palíndromo.')




