from dataclasses import dataclass

@dataclass
class Comando:
    comando: str
    diretorios: list[str]

def execute_command(comando: Comando):
    match comando:
        # Case mais específico em cima
        case Comando(comando='ls', diretorios=[_, *_]):
            for diretorio in comando.diretorios:
                print(diretorio)
        # Case mais genérico em baixo
        case Comando(comando=_, diretorios=[_, *_]):
            for diretorio in comando.diretorios:
                print(diretorio)
        case _:
            print('comando não encontrado...')
execute_command(Comando('ls', ['/home', '/user']))
# /home
# /user
execute_command(Comando('cp', ['/home', '/user']))
# /home
# /user