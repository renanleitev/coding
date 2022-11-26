def geradorcnpj():
    from random import randint
    while True:
        cnpj = str(randint(1000000000000, 9999999999999))
        listacnpj = [int(cnpj[c:c + 1]) for c in range(len(cnpj))]
        count = 5
        soma = 0
        for c in listacnpj[:4]:
            soma += c*count
            count -= 1
        count = 9
        for c in listacnpj[4:12]:
            soma += c*count
            count -= 1
        r01 = 11 - (soma % 11)
        r01 = 0 if r01 > 9 else r01
        listacnpj.append(r01)
        count = 6
        soma = 0
        for c in listacnpj[:5]:
            soma += c*count
            count -= 1
        count = 9
        for c in listacnpj[5:13]:
            soma += c*count
            count -= 1
        r02 = 11 - (soma % 11)
        r02 = 0 if r02 > 9 else r02
        if r01 == listacnpj[12] and r02 == listacnpj[13]:
            print('GERADOR DE CNPJ')
            print('CNPJ válido.')
            print(f'O CNPJ gerado é {cnpj}')
            r = str(input('Quer gerar outro CPF? [S/N] ').lower().strip())
            if r == 'n':
                break
def consultacnpj():
    while True:
        print('VALIDADOR DE CNPJ')
        cnpj = input('Insira o CPNJ (somente números): ')
        if not cnpj.isnumeric():
            print('Erro. Digite apenas números.')
        else:
            try:
                listacnpj = [int(cnpj[c:c + 1]) for c in range(len(cnpj))]
                count = 5
                soma = 0
                for c in listacnpj[:4]:
                    soma += c*count
                    count -= 1
                count = 9
                for c in listacnpj[4:12]:
                    soma += c*count
                    count -= 1
                r01 = 11 - (soma % 11)
                r01 = 0 if r01 > 9 else r01
                listacnpj.append(r01)
                count = 6
                soma = 0
                for c in listacnpj[:5]:
                    soma += c*count
                    count -= 1
                count = 9
                for c in listacnpj[5:13]:
                    soma += c*count
                    count -= 1
                r02 = 11 - (soma % 11)
                r02 = 0 if r02 > 9 else r02
                if r01 == listacnpj[12] and r02 == listacnpj[13]:
                    print('CNPJ válido.')
                else:
                    print('CNPJ inválido.')
            except Exception:
                print('Erro. Número inválido.')	
                continue

geradorcnpj()
consultacnpj()