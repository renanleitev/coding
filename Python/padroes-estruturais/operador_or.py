# Utilizando condições alternativas
def execute_command(command):
    match command.split():
        case ['ls' | 'list', *diretorios]:
            for diretorio in diretorios:
                print(diretorio)
        case _:
            print('comando não encontrado...')
execute_command('ls /home/vagrant /users/lol')
# /home/vagrant
# /users/lol
execute_command('list /home/vagrant /users/lol')
# /home/vagrant
# /users/lol
execute_command('lista /home/vagrant /users/lol')
# comando não encontrado...

# ! Obs: É recomendado criar cases ao invés de usar OR |
