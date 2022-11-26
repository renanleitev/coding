print('Digite quantos números quiser. ')
n = int(input('Digite um número: '))
s = 0
c = 0
r = 'a'
while r:
    s += n
    c += 1
    r = str(input('Você quer continuar? [S/N] ')).lower()
    if r == 'n':
        print(f'Você digitou {c} números. A soma dos números é {s}.')
        print('FIM')
        break
    elif r == 's':
        n = int(input('Digite um número: '))



