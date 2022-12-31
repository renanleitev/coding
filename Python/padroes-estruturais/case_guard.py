# Case Guard: Utilizando condições dentro dos cases
def execute_command(command):
    match command.split():
        case ['ls' | 'list', *diretorios] if len(diretorios) > 1:
            for diretorio in diretorios:
                print(diretorio)
        case ['ls' | 'list', *diretorios] if len(diretorios) == 1:
            for diretorio in diretorios:
                print('só tem um diretorio: ' + diretorio)
        case ['ls' | 'list', *diretorios] if len(diretorios) == 0:
            print('não tem diretorio...')
        case _:
            print('comando não encontrado...')
execute_command('ls /home /etc')
# /home
# /etc
execute_command('ls /home')
# só tem um diretorio: /home
execute_command('ls')
# não tem diretorio...