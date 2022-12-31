def execute_comando(comando):
    match comando:
        # [] = Lista vazia
        # [_] = lista com um elemento
        # [*_] = lista com mais de um elemento
        # [_, *_] = lista com um ou mais elementos
        case {'comando': 'ls' | 'list', 'diretorios': [_, *_]}:
            for diretorio in comando['diretorios']:
                print(diretorio)
        case _:
            print('comando não encontrado...')
execute_comando({'comando': 'list', 'diretorios': ['/home', '/users']})
# /home
# /users