# Removendo acentos das palavras

from unidecode import unidecode

a = 'Ação de Declaração de Inexistência de Débito'
b = unidecode(a)
c = str(a.encode('utf-8'))
with open('testeunidecode.txt', 'a') as file:
    file.write(b)
print('ok')
