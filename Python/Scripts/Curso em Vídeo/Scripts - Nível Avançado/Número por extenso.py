extenso = 'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quartoze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'
while True:
    num = int(input('Diga um número de 0 a 20: '))
    if num < 0 or num > 20:
        print('Você errou. Tente novamente.')
    else:
        print(f'O número {num} por extenso é {extenso[num]}.')
        break
