# Primeira Solução
c = str(input('Diga qual o seu sexo (M/F): ')).lower().strip()
while c:
    if c == 'm':
        while c == 'm':
            print('O sexo é masculino')
            c = str(input('Diga qual o seu sexo (M/F): ')).lower().strip()
    if c == 'f':
        while c == 'f':
            print('O sexo é feminino')
            c = str(input('Diga qual o seu sexo (M/F): ')).lower().strip()
    else:
        print('Você errou. Tente novamente.')
        c = str(input('Diga qual o seu sexo (M/F): ')).lower().strip()

# Segunda Solução:
# sexo = str(input('Diga qual o seu sexo (M/F): ')).lower().strip()
# while sexo not in 'MmFf':
#     sexo = str(input('Dados inválidos. Por favor, informe o seu sexo: ')).lower().strip()
# print(f'Sexo {sexo} registrado com sucesso! ')




