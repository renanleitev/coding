carrinho = [('Produto 1', 20), ('Produto 2', 30), ('Produto 3', 50)]
print(f'Lista de produtos: {carrinho}')
print(f'A soma dos produtos é: R$ {sum(produto[1] for produto in carrinho)}')
print(f'A soma dos produtos é: R$ {sum(y for x, y in carrinho)}')