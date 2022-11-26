print('Digite dois números. Depois, você pode somar, multiplicar ou descobrir qual é o maior número.')
lista = [1, 2, 3, 4, 5]
while True:
    A = input('Primeiro número: ')
    while True:
        try:
            float(A)
            break
        except Exception:
            A = input('Erro. Primeiro número: ')
    B = input('Segundo número: ')
    while True:
        try:
            float(B)
            break
        except Exception:
            B = input('Erro. Segundo número: ')
    print('[1] Somar\n[2] Multiplicar\n[3] Maior\n[4] Novos Números\n[5] Sair do Programa')
    while True:
        C = input('Selecione uma das opções: ')
        try:
            if int(C) == lista[0]:
                print(f'A soma entre {A} e {B} é {float(A) + float(B)}.')
                continue
            elif int(C) == lista[1]:
                print(f'{A} vezes {B} é igual a {float(A) * float(B):.2f}.')
                continue
            elif int(C) == lista[2]:
                if A > B:
                    print(f'{A} é maior que {B}.')
                    continue
                if B > A:
                    print(f'{B} é maior que {A}.')
                    continue
            elif int(C) in [lista[4], lista[3]]:
                break
        except Exception:
            print('Opção inválida.')
            continue
    if int(C) == lista[4]:
        print('Fim do programa. ')
        break
    elif int(C) == lista[3]:
        continue



