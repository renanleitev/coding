print('Faça um cadastro com homens e mulheres, dizendo a sua idade. ')
countmenos20 = countmais18 = countmasc = 0
while True:
    print('Cadastre uma pessoa: ')
    idade = int(input('Qual a sua idade? '))
    sexo = str(input('Qual o seu sexo? [M/F] ')).lower().strip()
    if sexo == 'm':
        countmasc += 1
    if sexo == 'f' and idade < 20:
        countmenos20 += 1
    if idade > 18:
        countmais18 += 1
    esc = str(input('Você quer continuar? [S/N] ')).lower().strip()
    if esc == 'n':
        print(f'Há {countmais18} pessoas com mais de 18 anos, há {countmasc} homens cadastrados e {countmenos20} mulheres com menos de 20 anos.')
        break


