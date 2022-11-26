print('Digite o nome e o peso de várias pessoas.')
# Primeira Solução:
tudo = []
pesototal = []
nomepesado = []
nomeleve = []
count = 0
while True:
    nome = str(input('Diga o nome: '))
    tudo.append(nome)
    peso = float(input('Diga o peso: '))
    tudo.append(peso)
    pesototal.append(peso)
    if count == 0:
        nomeleve = nomepesado = nome
    if peso == max(pesototal):
        nomepesado = nome
    if peso == min(pesototal):
        nomeleve = nome
    count += 1
    r = str(input('Deseja continuar? [S/N] ')).lower().strip()
    if r == 'n':
        break
print(f'A lista de pessoas cadastradas é {tudo}.')
print(f'Foram cadastradas {count} pessoas.')
print(f'A pessoa mais pesada é {nomepesado}, que pesa {max(pesototal)} kg.')
print(f'A pessoa mais leve é {nomeleve}, que pesa {min(pesototal)} kg.')

""" # Segunda Solução:
temp = []
princ = []
maior = menor = 0
while True:
    temp.extend((str(input('Nome: ')), float(input('Peso: '))))
    if not princ:
        maior = menor = temp[1]
    else:
        if temp[1] > maior:
            maior = temp[1]
        if temp[1] < menor:
            menor = temp[1]
    princ.append(temp[:])
    temp.clear()
    resp = str(input('Quer continuar? [S/N] '))
    if resp in 'Nn':
        break
print(f'Foram cadastradas {len(princ)} pessoas.')
print(f'O maior peso é {maior} kg, que pertence a ', end='...')
for p in princ:
    if p[1] == maior:
        print(f'\n{p[0]}')
print(f'O menor peso é {menor} kg, que pertence a ', end='...')
for p in princ:
    if p[1] == menor:
        print(f'\n{p[0]}') """

