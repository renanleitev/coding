a = b = 0

def inteiro(num):
    global a
    while True:
        a = input(num).strip()
        if a == '':
            a = 0
            print(f'Usuário preferiu não digitar nenhum número.')
            break
        else:
            try:
                int(a)
                it_is = True
                break
            except ValueError:
                it_is = False
                print('Erro. Digite um número inteiro.')



def real(num):
    global b
    while True:
        b = input(num).strip()
        if b == '':
            b = 0
            print(f'Usuário preferiu não digitar nenhum número.')
            break
        else:
            try:
                float(b)
                it_is = True
                break
            except ValueError:
                it_is = False
                print('Erro. Digite um número real.')


def resultado():
    print(f'O valor inteiro digitado foi {a} e o valor real foi {b}.')