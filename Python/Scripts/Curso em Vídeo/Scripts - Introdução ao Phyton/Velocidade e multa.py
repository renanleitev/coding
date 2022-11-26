print('Você passa em um radar de velocidade. Você olha pro painel do radar.')
A = float(input('Qual o valor da velocidade registrada no radar? '))
B = float((A-80)*7)
if A > 80:
    print (f'Droga! Você foi multado! Pague R$ {B} de multa ou recorra ao DETRAN!')
print ('Legal. Dirija com cuidado.')