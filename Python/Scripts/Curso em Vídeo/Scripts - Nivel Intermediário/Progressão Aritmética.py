print('Descubra os 10 primeiros termos de uma PA.')
I = int(input('Diga o termo inicial: '))
R = int(input('Diga a razão: '))
F = I + 10*R
for c in range(I, F, R):
    print(c, end = '-')
print('FIM')

