import os
import shutil

print('Crie um novo diretório.')
""" Use 'r' para evitar erros ao copiar caminhos do Windows. """
caminho_original = r'C:\Users\renan\Documents\Programação\mover'
caminho_novo = r'C:\Users\renan\Documents\Programação\teste'

try:
    """ Função os.mkdir = Cria uma nova pasta no caminho selecionado. """
    os.mkdir(caminho_novo)
    print('Pasta criada com sucesso.')
except FileExistsError:
    print('Erro. Pasta já existe.')

for root, dirs, files in os.walk(caminho_original):
    for file in files:
        old_file_path = os.path.join(root, file)
        """ Pode alterar o nome do arquivo ao mover para a nova pasta. """
        """ Original: teste, modificado: mover (não esquecer a extensão) """
        new_file_path = os.path.join(caminho_novo, 'mover.txt')
        """ Função shutil.move = Mover o arquivo. """
        # shutil.move(old_file_path, new_file_path)
        """ Função shutil.copy = Copiar o arquivo. """
        shutil.copy(old_file_path, new_file_path)
        print(f'Arquivo {file} movido com sucesso.')

        if '.txt' in file:
            """Função os.remove: Apagar arquivos """
            os.remove(new_file_path)
            print(f'Arquivo {file} apagado com sucesso.')
