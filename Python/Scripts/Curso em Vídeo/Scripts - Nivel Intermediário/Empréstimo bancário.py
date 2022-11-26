print('Bom dia. Você quer um empréstimo pra comprar a sua casa? Primeiro nos diga algumas informações.')
casa = float(input('Qual o valor da sua casa? '))
sal = float(input('Qual o seu salário? '))
tempo = int(input('Por quantos anos você pretende pagar? '))
parcan = casa/tempo
parcmen = parcan/12

if parcmen<=sal*0.3:
    print(f'Parabéns! O seu empréstimo foi aprovado! As parcelas vão ser de R$ {parcmen} mensais e R$ {parcan} anuais.')
else:
    print(f'Que pena! A parcela de R$ {parcmen} mensal infelizmente compromete seu salário. Por ano você pagaria R$ {parcan}. Seu empréstimo foi negado.')

