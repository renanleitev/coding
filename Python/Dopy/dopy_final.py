import sys
from dopy_gui import Ui_MainWindow
from PyQt5.QtWidgets import QMainWindow, QApplication
import pyautogui as pg
import pyperclip as pc
from time import sleep


class Novo(QMainWindow, Ui_MainWindow):
    def __init__(self, parent=None):
        # Importando as funções
        super().__init__(parent)
        super().setupUi(self)
        super().retranslateUi(self)
        # Clicando nos botões
        self.add_aplicativo.clicked.connect(self.programa)
        self.add_nome.clicked.connect(self.nome_programa)
        self.add_navegador.clicked.connect(self.navegador)
        self.add_url.clicked.connect(self.nome_site)
        self.executar_automacao.clicked.connect(self.executa)
        try:
            texto_programa = open('listaprograma.txt').read()
            self.display_app.setPlainText(texto_programa)
        except Exception:
            self.display_app.setPlainText('Nenhum programa adicionado.')
        try:
            texto_site = open('listasite.txt').read()
            self.display_url.setPlainText(texto_site)
        except Exception:
            self.display_url.setPlainText('Nenhum site adicionado.')
        self.refaz_programa.clicked.connect(self.refazer_programa)
        self.refaz_site.clicked.connect(self.refazer_site)
        self.deleta_programa.clicked.connect(self.apaga_programa)
        self.deleta_site.clicked.connect(self.apaga_site)
        self.deletatudo_programa.clicked.connect(self.deleta_tudo_programa)
        self.deletatudo_site.clicked.connect(self.deleta_tudo_site)
        self.sair_programa.clicked.connect(self.sair)

    def programa(self):
        conteudo = self.select_aplicativo.currentText()
        with open('listaprograma.txt', 'a', encoding='utf-8') as file:
            file.write(conteudo)
        texto_programa = open('listaprograma.txt').read()
        self.display_app.setPlainText(texto_programa)

    def nome_programa(self):
        nome = self.anota_aplicativo.text()
        with open('listaprograma.txt', 'a', encoding='utf-8') as file:
            file.write(nome)
            file.write('\n')
        texto_programa = open('listaprograma.txt').read()
        self.display_app.setPlainText(texto_programa)

    def navegador(self):
        browser = self.select_navegador.currentText()
        with open('listasite.txt', 'a', encoding='utf-8') as file:
            file.write('Aplicativo:')
            file.write(browser)
            file.write('\n')
        texto_site = open('listasite.txt').read()
        self.display_url.setPlainText(texto_site)

    def nome_site(self):
        site = self.anota_url.text()
        with open('listasite.txt', 'a', encoding='utf-8') as file:
            file.write(site)
            file.write('\n')
        texto_site = open('listasite.txt').read()
        self.display_url.setPlainText(texto_site)

    def executa(self):
        try:
            with open('listaprograma.txt', 'r', encoding='utf-8') as file:
                for programa in file:
                    if programa.isspace() is True:
                        pass
                    pc.copy(programa)
                    sleep(0.5)
                    pg.press('win')
                    sleep(0.5)
                    pg.hotkey('ctrl', 'v')
                    sleep(0.5)
                    pg.press('enter')
                    sleep(2)
        except Exception:
            pass
        try:
            with open('listasite.txt', 'r', encoding='utf-8') as file:
                for site in file:
                    if site.isspace() is True:
                        pass
                    elif 'Aplicativo:' in site:
                        pc.copy(site)
                        sleep(0.5)
                        pg.press('win')
                        sleep(0.5)
                        pg.hotkey('ctrl', 'v')
                        sleep(0.5)
                        pg.press('enter')
                        sleep(2)
                    else:
                        pg.write(site)
                        sleep(3)
                        pg.press('enter')
                        sleep(1)
                        pg.hotkey('ctrl', 't')
                        sleep(1)
        except Exception:
            pass
        self.close()

    def apaga_programa(self):
        try:
            f = open('listaprograma.txt', 'r')
            lines = f.readlines()
            linha_final = lines[:-1]
            self.linha_programa_apagada = lines[-1]
            f.close()
            f = open('listaprograma.txt', 'w')
            for line in linha_final:
                f.write(line)
            f.close()
            texto_programa = open('listaprograma.txt').read()
            self.display_app.setPlainText(texto_programa)
            self.conta_programa = 0
        except Exception:
            pass

    def apaga_site(self):
        try:
            f = open('listasite.txt', 'r')
            lines = f.readlines()
            linha_final = lines[:-1]
            self.linha_site_apagada = lines[-1]
            f.close()
            f = open('listasite.txt', 'w')
            for line in linha_final:
                f.write(line)
            f.close()
            texto_site = open('listasite.txt').read()
            self.display_url.setPlainText(texto_site)
            self.conta_site = 0
        except Exception:
            pass

    def refazer_programa(self):
        try:
            if self.conta_programa == 0:
                with open('listaprograma.txt', 'a') as file:
                    file.write(self.linha_programa_apagada)
                    self.conta_programa += 1
            texto_programa = open('listaprograma.txt').read()
            self.display_app.setPlainText(texto_programa)
        except Exception:
            pass

    def refazer_site(self):
        try:
            if self.conta_site == 0:
                with open('listasite.txt', 'a') as file:
                    file.write(self.linha_site_apagada)
                    self.conta_site += 1
            texto_site = open('listasite.txt').read()
            self.display_url.setPlainText(texto_site)
        except Exception:
            pass

    def deleta_tudo_programa(self):
        try:
            open('listaprograma.txt', 'w')
            self.display_app.setPlainText('A lista foi apagada.')
        except Exception:
            pass

    def deleta_tudo_site(self):
        try:
            open('listasite.txt', 'w')
            self.display_url.setPlainText('A lista foi apagada.')
        except Exception:
            pass

    def sair(self):
        self.close()


if __name__ == '__main__':
    qt = QApplication(sys.argv)
    novo = Novo()
    novo.show()
    qt.exec_()
