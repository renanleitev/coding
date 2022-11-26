soma = 0
cont = 0
for _ in range(6):
    A = int(input('Diga um número inteiro: '))
    if A%2 == 0:
        soma += A
    cont += 1
print(f'Você informou {cont} números e a soma dos números pares é {soma}.')

