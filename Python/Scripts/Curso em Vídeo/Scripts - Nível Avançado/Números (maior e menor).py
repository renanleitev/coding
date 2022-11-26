print('Digite 05 números inteiros diferentes.')
valores = [int(input('Digite um valor: ')) for _ in range(5)]
print(f'A lista é {valores}.')
for c, v in enumerate(valores):
    if v == max(valores):
        print(f'O maior valor digitado foi {v} e ele está na {c+1}ª posição da lista.')
    if v == min(valores):
        print(f'O menor valor digitado foi {v} e ele está na {c+1}ª posição da lista.')
print('FIM')