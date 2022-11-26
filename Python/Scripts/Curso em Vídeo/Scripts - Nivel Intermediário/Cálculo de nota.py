print('Você recebe as suas duas provas.')
print('Se a sua média for abaixo de 5, você é reprovado.')
print('Se a sua média for entre 5 e 6.9, você fica de recuperação.')
print('Se a sua média for igual ou maior que 7, você é aprovado.')
A = float(input('Diga a sua primeira nota:'))
B = float(input('Diga a sua segunda nota:' ))
C = (A+B)/2
if C < 5:
    print(f'A sua média foi {C}. Você foi reprovado! ')
elif 5 <= C <=6.9:
    print(f'A sua média foi {C}. Você vai ficar em recuperação.')
elif C >= 7:
    print (f'A sua média foi {C}. Parabéns, você está aprovado!')

