print('Calcule a área de um terreno, usando a largura e o comprimento.')


def area(a, b):
    r = a*b
    print(f'A área de um terreno {a}m X {b}m é de {r} m2.')


area(a=float(input('Qual a largura (m)? ')), b=float(input('Qual a altura? (m) ')))
