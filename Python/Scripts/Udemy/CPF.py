def consultacpf():
    print('VALIDADOR DE CPF')
    while True:
        soma = 0
        cpf = input('Digite o seu CPF (somente números): ')
        if not cpf.isnumeric():
            print('Erro. Digite apenas números.')
        else:
            try:
                listacpf = [int(cpf[c:c + 1]) for c in range(len(cpf))]
                count = 10
                for c in listacpf[:9]:
                    if count >= 2:
                        soma += c*count
                        count -= 1
                r01 = 11 - (soma % 11)
                d01 = 0 if r01 > 9 else r01
                count = 11
                soma = 0
                for c in listacpf[:9]:
                    if count >= 3:
                        soma += c*count
                        count -= 1
                    if count == 2:
                        soma += d01*2
                r02 = 11 - (soma % 11)
                d02 = 0 if r02 > 9 else r02
                if d01 == listacpf[9] and d02 == listacpf[10]:
                    print('CPF VÁLIDO.')
                else:
                    print('CPF INVÁLIDO.')
            except Exception:
                print('Erro. Número inválido.')
                continue
def geradorcpf():
    from random import randint
    while True:
        soma = 0
        count = 10
        cpf = str(randint(10000000000, 99999999999))
        listacpf = [int(cpf[c:c + 1]) for c in range(len(cpf))]
        for c in listacpf[:9]:
            if count >= 2:
                soma += c * count
                count -= 1
        r01 = 11 - (soma % 11)
        d01 = 0 if r01 > 9 else r01
        count = 11
        soma = 0
        for c in listacpf[:9]:
            if count >= 3:
                soma += c * count
                count -= 1
            if count == 2:
                soma += d01 * 2
        r02 = 11 - (soma % 11)
        d02 = 0 if r02 > 9 else r02
        if d01 == listacpf[9] and d02 == listacpf[10]:
            print('GERADOR DE CPF')
            print('CPF VÁLIDO.')
            print(f'O CPF gerado é {cpf}')
            r = str(input('Quer gerar outro CPF? [S/N] ').lower().strip())
            if r == 'n':
                break
geradorcpf()
consultacpf()

