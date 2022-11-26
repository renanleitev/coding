import os
""" Função os: Permite pesquisar e alterar arquivos do sistema """
""" Percorrendo arquivos e pastas """
""" Para converter bytes em kb, mb, gb, tb, pb etc. """


def formata_tamanho(tamanho):
    base = 1024
    kilo = base
    mega = base**2
    giga = base**3
    tera = base**4
    peta = base**5
    if tamanho < kilo:
        texto = 'B'
    elif tamanho < mega:
        tamanho /= kilo
        texto = 'KB'
    elif tamanho < giga:
        tamanho /= mega
        texto = 'MB'
    elif tamanho < tera:
        tamanho /= giga
        texto = 'GB'
    elif tamanho < peta:
        tamanho /= tera
        texto = 'TB'
    else:
        tamanho /= peta
        texto = 'PB'
    """ Para arredondar em duas casas decimais. """
    tamanho = round(tamanho, 2)
    return f'{tamanho} {texto}'


print('Pesquise qualquer arquivo do computador, utilizando o caminho do arquivo.') # noqa
caminho_procura = input('Digite o caminho do arquivo: ')
termo_procura = input('Digite o termo que deseja procurar: ')
conta = 0

""" Função os.walk = Percorre os arquivos do sistema. """
for raiz, diretorios, arquivos in os.walk(caminho_procura):
    # arquivos = Gera uma lista de todos os arquivos no diretório
    for arquivo in arquivos:
        if termo_procura in arquivo:
            try:
                # para cada item na lista arquivos
                """ Função os.path = Mostra o caminho do arquivo.
                            join = Junta o nome da raiz
                            com o nome do arquivo."""
                conta += 1
                caminho_completo = os.path.join(raiz, arquivo)
                """ Função os.path.splitext =
                Para separar o caminho em duas variáveis. """
                nome_arquivo, ext_arquivo = os.path.splitext(arquivo)
                """ Tamanho em bytes """
                tamanho = os.path.getsize(caminho_completo)
                print()
                print('Encontrei o arquivo:', arquivo)
                print('Caminho:', caminho_completo)
                print('Nome:', nome_arquivo)
                print('Extensão:', ext_arquivo)
                print('Tamanho:', formata_tamanho(tamanho))
            except PermissionError as e:
                print('Sem permissão.', e)
            except FileNotFoundError as e:
                print('Arquivo não encontrado.', e)
            except Exception as e:
                print('Erro desconhecido:', e)
print(f'\n{conta} arquivo(s) encontrado(s).')
