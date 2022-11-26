print('Crie um programa que leia o nome, a idade e o sexo de 04 pessoas.')
print('Descubra a média de idade do grupo, o nome e a idade do homem mais velho e quantas mulheres tem menos de 20 anos.')
somaidade = mediaidade = maioridadehomem = totmulher20 = 0
nomevelho = ''
for p in range(1, 5):
    print(f'{p}ª pessoa. ')
    nome = str(input('Qual o seu nome: ')).strip()
    idade = int(input('Qual a sua idade: '))
    sexo = str(input('Qual o seu sexo (M/F): ')).strip()
    somaidade += idade
    if p == 1 and sexo in 'Mm':
        maioridadehomem = idade
        nomevelho = nome
    if sexo in 'Mm' and idade > maioridadehomem:
        maioridadehomem = idade
        nomevelho = nome
    if sexo in 'Ff' and idade < 20:
        totmulher20 += 1
mediaidade = somaidade/4
print(f'A média de idade do grupo é de {mediaidade} anos.')
print(f'O homem mais velho se chama {nomevelho} e tem {maioridadehomem}.')
print(f'Há {totmulher20} mulheres menores de 20 anos.')





