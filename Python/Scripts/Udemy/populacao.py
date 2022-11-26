# Usando apenas while e if (não foi usado try e exception)
print('\t\tCalcule o tamanho de uma população com o tempo.')
print('-'*80)
while True:
    popl = input('\nTamanho da população: ')
    while not popl.isnumeric() or int(popl) < 0:
        print('\nDigite um número válido.')
        popl = input('\nTamanho da população: ')
    listasoma = [int(popl)]
    cresc = input('\nDiga a taxa de crescimento (em %): ')
    while not cresc.isnumeric() or int(cresc) < 0:
        print('\nDigite um número válido.')
        cresc = input('\nDiga a taxa de crescimento (em %): ')
    morte = input('\nDiga a taxa de mortalidade (em %): ')
    while not morte.isnumeric() or int(morte) < 0:
        print('\nDigite um número válido.')
        morte = input('\nDiga a taxa de mortalidade (em %): ')
    tempo = input('\nPeríodo de análise da população (em anos): ')
    while not tempo.isnumeric() or int(tempo) < 0:
        print('\nDigite um número válido.')
        tempo = input('\nPeríodo de análise da população (em anos): ')
    soma = int(popl)
    print('-'*80)
    print('\t\t\tEvolução Demográfica')
    print('-'*80)
    print(f'\nA poplulação inicial é de {int(popl)} habitantes.')
    somacresc = somamorte = count = 0
    for c in range(int(tempo)):
        print(f'\nNasceram {(soma*(int(cresc)/100)):.0f} pessoas e morreram {(soma*(int(morte)/100)):.0f} pessoas.')
        somacresc += (soma*(int(cresc)/100))
        somamorte += (soma*(int(morte)/100))
        soma += (soma*(int(cresc)/100)) - (soma*(int(morte)/100))
        listasoma.append(soma)
        taxa = ((listasoma[count+1] - listasoma[0])/listasoma[0])
        count += 1
        if taxa > 0:
            print(f'\nA população no ano {c+1} é de {(soma):.0f} habitantes e aumentou {taxa*100:.2f}% desde o início.') # noqa  
        elif taxa < 0:
            print(f'\nA população no ano {c+1} é de {(soma):.0f} habitantes e reduziu {taxa*-100:.2f}% desde o início.') # noqa
        elif taxa == 0:
            print('\nA população ficou estagnada.')
            break
    print(f'\nDesde o início, nasceram {somacresc:.0f} pessoas e morreram {somamorte:.0f} pessoas.') # noqa
    r = input('\nQuer continuar? [S/N] ').lower().strip()
    if r == 's':
        continue
    elif r == 'n':
        print('\nFIM DO PROGRAMA.')
        break
    else:
        while r != 'n':
            print('\nDigite uma opção válida.')
            r = input('\nQuer continuar? [S/N] ').lower().strip()
            if r == 's':
                break
        if r == 'n':
            print('\nFIM DO PROGRAMA.')
            break
