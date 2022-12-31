# Utilizando cases com apelidos (alias = as)
def execute_command(command):
    match command.split():
        case ['ls' | 'list' as comando, *diretorios] as lista:
                print(comando, f'lista: {lista}')
        case _:
            print('comando não encontrado...')
execute_command('ls /home /users/ /etc')
# ls lista: ['ls', '/home', '/users/', '/etc']