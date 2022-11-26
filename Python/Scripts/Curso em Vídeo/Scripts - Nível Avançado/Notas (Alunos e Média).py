print('Digite o nome dos alunos e as duas notas que eles tiraram esse semestre.')
# Primeira Solução (com listas):
listatotal = []
listanomes = []
listanotas = []
listanota01 = []
listanota02 = []
listamedia = []
pos = 0
while True:
    nome = input('Nome: ')
    while not nome.isalpha():
        nome = input('Erro. Nome: ')
    listatotal.append(nome)
    listanomes.append(nome)
    nota01 = input('Nota 01: ')
    while not nota01.isdecimal or float(nota01) < 0 or float(nota01) > 10:
        nota01 = input('Erro. Nota 01: ')
    listanotas.append(float(nota01))
    listatotal.append(float(nota01))
    listanota01.append(float(nota01))
    nota02 = input('Nota 02: ')
    while not nota02.isdecimal or float(nota02) < 0 or float(nota02) > 10:
        nota02 = input('Erro. Nota 02: ')
    listanotas.append(float(nota02))
    listatotal.append(float(nota02))
    listanota02.append(float(nota02))
    media = (float(nota01)+float(nota02))/2
    listamedia.append(media)
    r = input('Quer continuar? [S/N] ').lower().strip()
    while not r.isalpha():
        r = input('Quer continuar? [S/N] ').lower().strip()
    if r == 's':
        continue
    elif r == 'n':
        break
print(f'A lista de alunos e suas respectivas notas é: {listatotal}.')
print(f'Nº\t\t\tNOME\t\t\t\tMEDIA')
for x in listanomes:
    pos += 1
    print(f'{pos}\t\t\t{listanomes[pos-1]}\t\t\t\t{listamedia[pos-1]}')
while True:
    q = input('Mostrar as notas de qual aluno? Digite 0 para interromper a pesquisa: ')
    while not q.isnumeric() or int(q) > pos:
        print('Você digitou errado. Tente novamente.')
        q = input('Mostrar as notas de qual aluno? Digite 0 para interromper a pesquisa: ')
    if int(q) == 1 or int(q) > 1:
        print(f'As notas de {listanomes[int(q)-1]} são {listanotas[(0 + 2*(int(q)-1)):(2 + 2*(int(q)-1))]}.')
    elif int(q) == 0:
        print('FIM')
        break

# Segunda Solução:
# ficha = []
# while True:
#     nome = str(input('Nome: '))
#     nota1 = float(input('Nota 1: '))
#     nota2 = float(input('Nota 2: '))
#     media = (nota1 + nota2)/2
#     ficha.append([nome, [nota1, nota2], media])
#     resp = str(input('Quer continuar? [S/N] ')).lower().strip()
#     if resp == 'n':
#         break
# print(f'{"Nº":<4}{"NOME":<10}{"MEDIA":>8}')
# for i, a in enumerate(ficha):
#     print(f'{i:<4}{a[0]:<10}{a[2]:>8.1f}')
# while True:
#     opc = int(input('Mostrar notas de qual aluno? 999 interrompe: '))
#     if opc == 999:
#         print('FIM')
#         break
#     if opc <= len(ficha) - 1:
#         print(f'Notas de {ficha[opc][0]} são {ficha[opc][1]}.')