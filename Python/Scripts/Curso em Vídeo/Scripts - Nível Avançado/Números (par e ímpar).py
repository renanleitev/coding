lista = []
par = []
impar = []
print('Digite qualquer número inteiro. Ele será separado em par e impar.')
while True:
    a = int(input('Diga qualquer número inteiro: '))
    lista.append(a)
    if a%2 == 0:
        par.append(a)
    if a%2 == 1:
        impar.append(a)
    r = str(input('Você quer continuar? [S/N] ')).lower().strip()
    if r == 'n':
        break
lista.sort()
par.sort()
impar.sort()
print(f'A lista com todos os números é {lista}.')
print(f'A lista com todos os números pares é {par}.')
print(f'A lista com todos os números ímpares é {impar}.')
