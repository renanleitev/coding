print('Diga qualquer expressão matemática com parêntese () pra saber se está certa ou não.')

# Primeira Solução:
while True:
    a = str(input('Diga qualquer expressão matemática: ')).lower().strip()
    b = list(a)
    parent = sum(v in ['(', ')'] for v in b)
    if parent % 2 == 0 and parent > 0 and b[0] == '(' and b[-1] == ')':
        print('A expressão é válida.')
    else:
        print('A expressão é inválida. Você esqueceu algum parêntese!')
        input('Digite qualquer tecla para continuar... ')

# Segunda Solução:
# expr = str(input('Diga qualquer expressão matemática: ')).lower().strip()
# pilha = []
# for simb in expr:
#     if simb == '(':
#         pilha.append('(')
#     elif simb == ')':
#         if len(pilha) > 0:
#             pilha.pop()
#         else:
#             pilha.append(')')
#             break
# if len(pilha) == 0:
#     print('Sua expressão é valida.')
# else:
#     print('Sua expressão está errada.')


