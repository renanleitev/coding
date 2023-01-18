# Escolhendo o caminho para salvar o arquivo
import os.path


def cria_arquivo():
    save_path = r'C:\Users\renan\Downloads'
    name_of_file = input("Diga o nome do arquivo: ")
    completeName = os.path.join(save_path, f"{name_of_file}.txt")
    with open(completeName, "w") as file1:
        toFile = input("Diga o que você quer escrever: ")
        file1.write(toFile)


while True:
    try:
        print('Criando arquivos de texto (.txt). Eles vão ser salvos na pasta Downloads.') # noqa
        r = int(input('Quantos arquivos quer criar? [0] para sair: '))
        if r == 0:
            print('Fim do programa.')
            break
        elif r < 0:
            print('Erro. Digite apenas números positivos.')
            continue
        else:
            for _ in range(r):
                cria_arquivo()
                continue
    except Exception:
        print('Erro. Digite apenas números.')
        continue
