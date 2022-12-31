# Você pode desestruturar uma string em uma lista
def execute_command(command):
    match command.split():
        # Primeiro valor = fixo ('ls')
        # Segundo valor = dinamico (caminho)
        # Terceiro valor = qualquer coisa (*_)
        case ['ls', caminho, *_]:
            print('ls', caminho)
        # Se passar três ou mais valores = Não dá match
        case ['cd', caminho]:
            print('cd', caminho)
        # Usando desempacotamento
        case ['pwd', *diretorios]:
            print('pwd', diretorios)
        # Usando laços de repetição
        case ['cp', *diretorios]:
            for diretorio in diretorios:
                print('pwd', diretorio)
        # Usando condicionais
        case ['rm', *diretorios]:
            for diretorio in diretorios:
                if diretorio == '/home':
                    print('Você está em casa...')
                print('rm', diretorio)
        # Se não der match em nenhum antes
        case _:
            print('não encontrado')

# Fazendo testes...
execute_command('pwd /home /users /bin/bash')
# pwd ['/home', '/users', '/bin/bash']
execute_command('cp /home /users /bin/bash')
# pwd /home
# pwd /users
# pwd /bin/bash
execute_command('rm /home /users /bin/bash')
# Você está em casa...
# rm /home
# rm /users
# rm /bin/bash
