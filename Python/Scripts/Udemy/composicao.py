# Composição de Classes
# Quando uma classe é deletada, as outras são também

from classes import Cliente, Endereco

c1 = Cliente('Renan', 25)
c1.insere_endereco('Recife', 'PE')
print(c1.nome)
c1.lista_endereco()
del c1
# c1.endereco é apagado
print('#'*30)

c2 = Cliente('Maria', 34)
print(c2.nome)
c2.insere_endereco('Fortaleza', 'CE')
c2.insere_endereco('Rio de Janeiro', 'RJ')
c2.lista_endereco()
del c2
# c2.endereco é apagado
print('#'*30)

c3 = Cliente('João', 23)
print(c3.nome)
c3.insere_endereco('Brasilia', 'DF')
c3.lista_endereco()
del c3
# c2.endereco é apagado

