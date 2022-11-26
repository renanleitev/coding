tabela = 'Palmeiras', 'Corinthians', 'Athletico-PR', 'Internacional', 'Atlético-MG', 'Fluminense', 'Santos', 'São Paulo', 'Flamengo', 'Botafogo', 'Avaí', 'Bragantino', 'Atlético Goianiense', 'Goiás', 'Ceará', 'Coritiba', 'América-MG', 'Cuiabá', 'Juventude', 'Fortaleza'
print('Tabela Brasileirão Série A 2022.')
print(f'Os 05 primeiros colocados da tabela são {tabela[:5]}.')
print(f'Os 04 últimos colocados da tabela são {tabela[-4:]}.')
print('A ordem alfabética da tabela é:', sorted(tabela))
print(f'O Fortaleza está na {tabela.index("Fortaleza")+1}ª posição da tabela.')
# count = 0
# for c in tabela:
#     count += 1
#     if c == 'Fortaleza':
#         print(f'Fortaleza está na {count}ª posição.')
print('FIM')
