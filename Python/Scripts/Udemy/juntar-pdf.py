""" Como juntar PDF """

# import PyPDF2
# import os

caminho = r'C:\Users\renan\Documents\Programação\Atalhos'

""" #! Juntar pdf:

novo = PyPDF2.PdfFileMerger()

for root, dirs, files in os.walk(caminho):
    for file in files:
        caminho_completo = os.path.join(root, file)
        arquivo_pdf = open(caminho_completo, 'rb')
        novo.append(arquivo_pdf)

with open(f'{caminho}/novo.pdf', 'wb') as zerado:
    novo.write(zerado)

print('Arquivos juntados com sucesso.') """
