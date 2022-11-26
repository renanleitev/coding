# Agregação entre classes
# Quando são agregadas, as classes dependem uma da outra

from classes import CarrinhoDeCompras, Produto

carrinho = CarrinhoDeCompras()
p1 = Produto('Kindle', 320)
p2 = Produto('Pagphone', 360)
p3 = Produto('Calça', 301)

carrinho.inserir_produto(p1)
carrinho.inserir_produto(p2)
carrinho.inserir_produto(p3)
...
# A classe lista_produto vai depender das classes anteriores
carrinho.lista_produto()
# A classe soma_total vai depender das classes anteriores
print(carrinho.soma_total())
