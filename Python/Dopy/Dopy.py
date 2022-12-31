import pyautogui as pg
import pyperclip as pc
from time import sleep

lista = ['A', 'aplicativo: ', 'D', 'documento: ',
         'M', 'musica: ', 'P', 'pasta: ', 'F', 'foto: ',
         'V', 'video: ']


def funcao_nome(ask):
    nome = input('Nome/Name: ')
    print(f'{nome} foi adicionado com sucesso/ has been added successfully.')
    # Para digitar caracteres especiais => encoding='utf-8'
    with open('listaprograma.txt', 'a', encoding='utf-8') as file_programa:
        file_programa.write(lista[lista.index(ask)+1])
        file_programa.write(nome)
        file_programa.write('\n')


def copia_nome(nome):
    pc.copy(nome)
    sleep(0.5)
    pg.press('win')
    sleep(0.5)
    pg.hotkey('ctrl', 'v')
    sleep(0.5)
    pg.press('enter')
    sleep(2)


try:
    with open('listaprograma.txt', 'x'):
        pass
    print("""
Bem vindo ao sistema de automação Dopy.
Com apenas um click, automatize tarefas repetitivas,
abra programas, arquivos, músicas, vídeos e pastas.
Obs: A ordem de inicialização irá ocorrer conforme as opções escolhidas.
Iniciando... Arquivo de configuração criado.""")
    print("""
Welcome to the Dopy automation system.
With just one click, automate repetitive tasks,
open programs, files, music, videos and folders.
Note: The boot order will occur according to the options chosen.
Starting... Configuration file created.""")
    while True:
        print("""
[A] => Aplicativos/Aplications
[D] => Documentos/Documents
[M] => Músicas/Musics
[P] => Pastas/Folders
[F] => Fotos/Pictures
[V] => Vídeos/Videos""")
        pergunta = input('Digite uma opção ou digite [N] para encerrar/Choose an option or press [N] to quit: ').upper().strip() # noqa
        if pergunta == 'N':
            break
        elif pergunta not in lista:
            print('Digite uma opção válida/Choose a valid option.')
            continue
        else:
            funcao_nome(pergunta)
            continue
    with open('listaprograma.txt', 'r', encoding='utf-8') as file_programa:
        print('Ordem de inicialização/Order of boot:')
        for conta, item in enumerate(file_programa, start=1):
            print(f'{conta}: {item}')
    while True:
        nav = input('Quer abrir sites ao iniciar o computador? [S/N] / Do you want to open websites when starting your computer? [Y/N] ').upper().strip() # noqa
        if nav == 'N':
            sleep(5)
            print("""
Saindo... Reinicie o Dopy para automatizar as tarefas.
Closing... Reboot Dopy to automate the tasks. """)
            break
        else:
            browser = input("Nome do Navegador / Browser name: ")
            with open('listasite.txt', 'a', encoding='utf-8') as file_site: # noqa
                file_site.write('aplicativo:')
                file_site.write(browser)
                file_site.write('\n')
            while True:
                sites = input('Digite a URL / Enter the URL: ')
                with open('listasite.txt', 'a', encoding='utf-8') as file_site:
                    file_site.write(sites)
                    file_site.write('\n')
                add_site = input('Quer adicionar mais algum site? [S/N] / Do you want to add any more websites? [Y/N] ').upper().strip() # noqa
                if add_site == 'N':
                    break
                else:
                    continue
            continue
except Exception:
    with open('listaprograma.txt', 'r', encoding='utf-8') as file_programa:
        for programa in file_programa:
            if programa.isspace() is True:
                pass
            copia_nome(programa)
    with open('listasite.txt', 'r', encoding='utf-8') as file_site:
        for site in file_site:
            if site.isspace() is True:
                pass
            elif 'aplicativo:' in site:
                copia_nome(site)
            else:
                pg.write(site)
                sleep(3)
                pg.press('enter')
                sleep(1)
                pg.hotkey('ctrl', 't')
                sleep(1)
