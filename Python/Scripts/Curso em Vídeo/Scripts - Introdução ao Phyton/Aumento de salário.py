print("O seu chefe acorda de bom humor e decide dar um aumento justo para os funcionários, com base nos salários.")
print("Para quem ganha até R$ 1250,00, o aumento será de 15%, e para quem ganha acima de R$ 1.250,00, o aumento será de 10%.")
A = float(input('O chefe pergunta o seu salário, em reais: '))
B = float(A*0.1)
C = float(A*0.15)
if A > 1250:
    print(f'O seu aumento de salário é R$ {B}, parabéns!')
elif A <= 1250:
    print(f'O seu aumento de salário é R$ {C}, parabéns!')


