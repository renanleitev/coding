print('Você vai fazer as suas compras, analisando vários produtos e seus respectivos preços. ')
print('Você quer saber o total de gastos, quantos produtos custam mais de R$ 1.000,00 e qual o produto mais barato. ')
soma = quantprod = menor = count = 0
nomemenor = 'a'
while True:
    print('Cadastre um produto: ')
    nome = str(input('Qual o nome do produto? ')).upper().strip()
    preco = int(input('Qual o preço do produto? '))
    soma += preco
    count += 1
    if preco > 1000:
       quantprod += 1
    if count == 1 or preco < menor:
        nomemenor = nome
        menor = preco
    esc = str(input('Você quer continuar? [S/N] ')).lower().strip()
    if esc == 'n':
        print(f'O total da compra é R$ {soma} e {quantprod} produto(s) custam mais de R$ 1.000,00. ')
        print(f'O produto mais barato é {nomemenor}, que custa R$ {menor}.')
        break
