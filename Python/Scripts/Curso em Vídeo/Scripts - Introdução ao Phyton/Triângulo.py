A = int(input('Diga um número: '))
B = int(input('Diga um número: '))
C = int(input('Diga um número: '))

if A < B + C and B < A + C and C < B + A:
    print('É um triângulo')
else:
    print('Não é um triângulo')

if A < B + C and B < A + C and C < B + A and (A == B) and (B == C):
    print ('É equilátero')
else:
    print ('É escaleno')

if A < B + C and B < A + C and C < B + A and ((A^2==B^2+C^2) or (B^2==A^2+C^2) or (C^2==B^2+A^2)):
    print ('É retângulo')
else:
    print ('Não é retângulo')

# Outra solução possível:
# import math
# TRI = (A < B+C) and (B < C+A) and (C < A+B)
# EQUI = TRI and ((A == B) and (B == C))
# ESC = TRI and ((A != B) or (B != C) or (A != C))
# RET= TRI and ((A^2==B^2+C^2) or (B^2==A^2+C^2) or (C^2==B^2+A^2))
# P= (A+B+C)/2
# AREA= math.sqrt(P*(P-A)*(P-B)*(P-C))
# print('É um triângulo?', TRI)
# print('É equilátero?', EQUI)
# print('É escaleno?', ESC)
# print('É retângulo?', RET)
# print('Qual o perímetro?', P*2)
# print('Qual a área do triângulo?', AREA)
#
# #Formula para calcular seno e cosseno: print((math.sin(30*math.pi/180)))






