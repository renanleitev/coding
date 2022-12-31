# Usando if, elif e else
def execute_command(command):
    if command == 'ls':
        print('$ listing files')
    elif command == 'cd':
        print('$ changing directory')
    else:
        print('$ command not found')
execute_command('ls')

# Usando match case
def rodando_comando(comando: str):
    match comando:
        case 'ls':
            print('$ listing files')
        case 'cd':
            print('$ changing directory')
        # _ = Caso padrão (default) = Não é obrigatório
        case _:
            print('$ command not found')
rodando_comando('ls')