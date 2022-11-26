""" Rodando arquivos no terminal """

# ! Pesquisar o diretório do Python no Windows
# ! E como rodar um arquivo no Python no Windows
import sys
import os

argumentos = sys.argv
qtd_argumentos = len(argumentos)

if qtd_argumentos <= 1:
    print('Faltando argumentos:')
    print('-a', 'Para listar todos os arquivos neste pasta', sep='\t')
    print('-d', 'Para listar todos os diretórios neste pasta', sep='\t')
    sys.exit()


so_arquivos = '-a' in argumentos
so_diretorios = '-d' in argumentos
for arquivo in os.listdir('.'):
    if so_arquivos and os.path.isfile(arquivo):
        print(arquivo)

    if so_diretorios and os.path.isdir(arquivo):
        print(arquivo)
