print('Diga o nome, o sexo e a idade de várias pessoas.')
listanome = []
listaidade = []
listahomem = []
listamulher = []
listasexo = []
somaidade = countnome = media = 0
while True:
    nome = input('Nome: ')
    while not nome.isalpha():
        nome = input('Erro. Nome: ')
    listanome.append(nome)
    countnome += 1
    sexo = input('Sexo: [M/F] ').upper().strip()
    while not sexo.isalpha() or sexo not in ['M', 'F']:
        sexo = input('Erro. Sexo: [M/F] ').upper().strip()
    listasexo.append(sexo)
    if sexo == 'F':
        listamulher.append(nome)
    elif sexo == 'M':
        listahomem.append(nome)
    idade = input('Idade: ')
    while not idade.isnumeric() or int(idade) < 0:
        idade = input('Erro. Idade: ')
    listaidade.append(int(idade))
    somaidade += int(idade)
    media = somaidade / countnome
    r = input('Quer continuar? [S/N] ').lower().strip()
    if r == 's':
        continue
    elif r == 'n':
        print('-' * 30)
        print(f'O grupo tem {countnome} pessoas.')
        print(f'A média de idade é {media} anos.')
        print(f'Os homens cadastrados são: {listahomem}.')
        print(f'As mulheres cadastradas são: {listamulher}.')
        print('A lista de pessoas com idade acima da média são:')
        for c in listaidade:
            if c > media:
                k = listaidade.index(c)
                print(f'Nome: {listanome[k]}, Sexo: {listasexo[k]}, Idade:', c)
        print('FIM')
        break
    else:
        while r != 'n':
            print('Digite uma opção válida.')
            r = input('Quer continuar? [S/N] ').lower().strip()
            if r == 's':
                break
        if r == 'n':
            print('-' * 30)
            print(f'O grupo tem {countnome} pessoas.')
            print(f'A média de idade é {media} anos.')
            print(f'Os homens cadastrados são: {listahomem}.')
            print(f'As mulheres cadastradas são: {listamulher}.')
            print('A lista de pessoas com idade acima da média são:')
            for c in listaidade:
                if c > media:
                    k = listaidade.index(c)
                    print(f'Nome: {listanome[k]}, Sexo: {listasexo[k]}, Idade:', c)
            print('FIM')
            break
    if r == 'n':
        print('-' * 30)
        print(f'O grupo tem {countnome} pessoas.')
        print(f'A média de idade é {media} anos.')
        print(f'Os homens cadastrados são: {listahomem}.')
        print(f'As mulheres cadastradas são: {listamulher}.')
        print('A lista de pessoas com idade acima da média são:')
        for c in listaidade:
            if c > media:
                k = listaidade.index(c)
                print(f'Nome: {listanome[k]}, Sexo: {listasexo[k]}, Idade:', c)
        print('FIM')
        break
