print('Diga o nome e a nota de um aluno para saber se ele está aprovado ou não. ')
nome = str(input('Nome: '))
nota = float(input('Nota: '))
ficha = {'Nome': nome, 'Nota': nota}
for k, v in ficha.items():
    print(f'{k} é {v}.')
if nota >= 7:
    print('Resultado: Aprovado.')
else:
    print('Resultado: Reprovado.')
