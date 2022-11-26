print('Você está querendo saber o seu IMC. Para isso, você consulta a sua nutricionista.')
A = float(input('Bom dia. Qual a sua altura? '))
B = float(input('Ok. Qual o seu peso? '))
C = B/(A**2)
if C < 18.5:
    print(f'O seu IMC é de {C}. Infelizmente você está abaixo do peso ideal.')
elif 18.5 <= C < 25:
    print(f'O seu IMC é de {C}. Parabéns! Você está no peso ideal.')
elif 25 <= C < 30:
    print(f'O seu IMC é de {C}. Atenção! Você está acima do peso.')
elif 30 <= C < 40:
    print(f'O seu IMC é de {C}. Cuidado! Você está com obesidade.')
else:
    print(f'O seu IMC é de {C}. Trágico! Você está com obesidade morbida.')
