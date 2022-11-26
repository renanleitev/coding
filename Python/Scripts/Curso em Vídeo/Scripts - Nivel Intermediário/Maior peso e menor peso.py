print('Digite o peso de 05 pessoas. ')
maior = menor = 0
for p in range(5):
    peso = int(input('Diga o seu peso: '))
    if p == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso
print(f'O maior peso é {maior} kg.')
print(f'O menor peso é {menor} kg.')





