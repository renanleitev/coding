""" Descompactando arquivos ZIP """

from zipfile import ZipFile
import os

# Para caminhos com barra invertida (\), utilize r
caminho = r'C:\Users\renan\nome_da_pasta'

# ESCREVE (compacta os arquivos)
with ZipFile('arquivo.zip', 'w') as zip:
    for arquivo in os.listdir(caminho):
        caminho_completo = os.path.join(caminho, arquivo)
        zip.write(caminho_completo, arquivo)

# LISTA
with ZipFile('arquivo.zip', 'r') as zip:
    for arquivo in zip.namelist():
        print(arquivo)

# EXTRAI (descompacta os arquivos)
with ZipFile('arquivo.zip', 'r') as zip:
    zip.extractall('descompactado')
