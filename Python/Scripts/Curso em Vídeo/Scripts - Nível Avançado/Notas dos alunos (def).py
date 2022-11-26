def notas(lista):
    count = soma = 0
    for x in lista:
        count += 1
        soma += x
    media = soma/count
    print(f'A nota dos alunos são: {lista}.')
    print(f'A quantidade de notas é: {count}.')
    print(f'A soma das notas é: {soma}.')
    print(f'A média das notas é: {media}.')
    print(f'A nota mais alta é: {max(lista)}.')
    print(f'A nota mais baixa é: {min(lista)}.')
    if media >= 7:
        print('SITUAÇÃO: BOA.')
    if 7 > media >= 5:
        print('SITUAÇÃO: RAZOÁVEL.')
    if media < 5:
        print('SITUAÇÃO: RUIM.')

lista = []

while True:
    try:
        n = float(input('Informe as notas dos alunos: '))
        lista.append(n)
        r = input('Quer continuar? [S/N] ').lower().strip()
        while not r.isalpha():
            r = input('Quer continuar? [S/N] ').lower().strip()
        if r == 's':
            continue
        elif r == 'n':
            break
    except Exception:
        print('Erro. Tente novamente.')
        continue
notas(lista)