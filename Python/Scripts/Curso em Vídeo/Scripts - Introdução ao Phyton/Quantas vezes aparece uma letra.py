A = ((str(input('Diga uma palavra:'))).lower()).strip()
B = A.count('a')
C = (A.find('a')+1)
D = (A.rfind('a')+1)
print('A letra a aparece', B,'vezes','\nA primeira letra a aparece na posição', C,'\nA última letra a aparece na posição', D)


