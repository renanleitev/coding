""" 
crie uma lista com as seguintes funções:

adicionar tarefa
listar tarefa
opção de desfazer a última ação
opção de refazer a última ação
ex: [a, b]
[a, 'remove b'] - desfazer
[a, 'adiciona b'] - refazer
"""

lista01= [0]
lista02 = []
while True:
    try:
        lista01.remove(0)
    except ValueError:
        a = input('Diga o que você quer fazer: ')
        lista01.append(a)
        print(lista01)
        d = str(input('Quer desfazer o item da lista? [S/N] ')).lower().strip()
        if d == 's':
            lista01.remove(a)
            print(lista01)
            lista02.append(a)
        elif d == 'n':
            r = str(input('Quer refazer o último item apagado da lista? [S/N] ')).lower().strip()
            if r == 's':
                lista01.append(lista02[-1])
                print(lista01)
                continue
        continue 


""" Segunda Solução """
"""
Faça uma lista de tarefas com as seguintes opções:
    adicionar tarefa
    listar tarefas
    opção de desfazer (a cada vez que chamarmos, desfaz a última ação)
    opção de refazer (a cada vez que chamarmos, refaz a última ação)
    ['Tarefa 1', 'Tarefa 2']
    ['Tarefa 1'] <- Desfazer
    ['Tarefa 1', 'Tarefa 2'] <- Refazer
    input <- Nova tarefa
"""

""" 
def show_op(todo_list):
    print()
    print('Tarefas: ')
    print(todo_list)
    print()


def do_undo(todo_list, redo_list):
    if not todo_list:
        print('Nada a desfazer')
        return

    last_todo = todo_list.pop()
    redo_list.append(last_todo)


def do_redo(todo_list, redo_list):
    if not redo_list:
        print('Nada a refazer')
        return

    last_redo = redo_list.pop()
    todo_list.append(last_redo)


def do_add(todo, todo_list):
    todo_list.append(todo)


if __name__ == '__main__':
    todo_list = []
    redo_list = []

    while True:
        todo = input('Digite uma tarefa ou undo, redo, ls: ')

        if todo == 'ls':
            show_op(todo_list)
            continue
        elif todo == 'undo':
            do_undo(todo_list, redo_list)
            continue
        elif todo == 'redo':
            do_redo(todo_list, redo_list)
            continue

        do_add(todo, todo_list) """
