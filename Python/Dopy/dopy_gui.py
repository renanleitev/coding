# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'dopy_gui.ui'
#
# Created by: PyQt5 UI code generator 5.15.7
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(547, 366)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.gridLayout = QtWidgets.QGridLayout(self.centralwidget)
        self.gridLayout.setObjectName("gridLayout")
        self.scrollArea = QtWidgets.QScrollArea(self.centralwidget)
        self.scrollArea.setWidgetResizable(True)
        self.scrollArea.setObjectName("scrollArea")
        self.scrollAreaWidgetContents = QtWidgets.QWidget()
        self.scrollAreaWidgetContents.setGeometry(QtCore.QRect(0, -171, 510, 498))
        self.scrollAreaWidgetContents.setObjectName("scrollAreaWidgetContents")
        self.gridLayout_2 = QtWidgets.QGridLayout(self.scrollAreaWidgetContents)
        self.gridLayout_2.setObjectName("gridLayout_2")
        self.caixa_diag_nav = QtWidgets.QTextBrowser(self.scrollAreaWidgetContents)
        self.caixa_diag_nav.setObjectName("caixa_diag_nav")
        self.gridLayout_2.addWidget(self.caixa_diag_nav, 2, 2, 1, 2)
        self.display_url = QtWidgets.QTextEdit(self.scrollAreaWidgetContents)
        self.display_url.setObjectName("display_url")
        self.gridLayout_2.addWidget(self.display_url, 12, 2, 1, 2)
        self.display_app = QtWidgets.QTextEdit(self.scrollAreaWidgetContents)
        self.display_app.setObjectName("display_app")
        self.gridLayout_2.addWidget(self.display_app, 12, 0, 1, 2)
        self.anota_aplicativo = QtWidgets.QLineEdit(self.scrollAreaWidgetContents)
        self.anota_aplicativo.setObjectName("anota_aplicativo")
        self.gridLayout_2.addWidget(self.anota_aplicativo, 6, 1, 1, 1)
        self.select_navegador = QtWidgets.QComboBox(self.scrollAreaWidgetContents)
        self.select_navegador.setObjectName("select_navegador")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.select_navegador.addItem("")
        self.gridLayout_2.addWidget(self.select_navegador, 4, 2, 1, 2)
        self.deleta_site = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.deleta_site.setObjectName("deleta_site")
        self.gridLayout_2.addWidget(self.deleta_site, 13, 2, 1, 2)
        self.executar_automacao = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.executar_automacao.setObjectName("executar_automacao")
        self.gridLayout_2.addWidget(self.executar_automacao, 1, 0, 1, 4)
        self.deleta_programa = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.deleta_programa.setObjectName("deleta_programa")
        self.gridLayout_2.addWidget(self.deleta_programa, 13, 0, 1, 2)
        self.add_navegador = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.add_navegador.setObjectName("add_navegador")
        self.gridLayout_2.addWidget(self.add_navegador, 5, 2, 1, 2)
        self.sair_programa = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.sair_programa.setObjectName("sair_programa")
        self.gridLayout_2.addWidget(self.sair_programa, 24, 0, 1, 4)
        self.add_url = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.add_url.setObjectName("add_url")
        self.gridLayout_2.addWidget(self.add_url, 11, 2, 1, 2)
        self.toolButton_2 = QtWidgets.QToolButton(self.scrollAreaWidgetContents)
        self.toolButton_2.setObjectName("toolButton_2")
        self.gridLayout_2.addWidget(self.toolButton_2, 6, 2, 1, 1)
        self.anota_url = QtWidgets.QLineEdit(self.scrollAreaWidgetContents)
        self.anota_url.setObjectName("anota_url")
        self.gridLayout_2.addWidget(self.anota_url, 6, 3, 1, 1)
        self.toolButton = QtWidgets.QToolButton(self.scrollAreaWidgetContents)
        self.toolButton.setObjectName("toolButton")
        self.gridLayout_2.addWidget(self.toolButton, 6, 0, 1, 1)
        self.caixa_diag_app = QtWidgets.QTextBrowser(self.scrollAreaWidgetContents)
        self.caixa_diag_app.setObjectName("caixa_diag_app")
        self.gridLayout_2.addWidget(self.caixa_diag_app, 2, 0, 1, 2)
        self.textBrowser = QtWidgets.QTextBrowser(self.scrollAreaWidgetContents)
        self.textBrowser.setObjectName("textBrowser")
        self.gridLayout_2.addWidget(self.textBrowser, 0, 0, 1, 4)
        self.deletatudo_site = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.deletatudo_site.setObjectName("deletatudo_site")
        self.gridLayout_2.addWidget(self.deletatudo_site, 15, 2, 1, 2)
        self.deletatudo_programa = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.deletatudo_programa.setObjectName("deletatudo_programa")
        self.gridLayout_2.addWidget(self.deletatudo_programa, 15, 0, 1, 2)
        self.refaz_site = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.refaz_site.setObjectName("refaz_site")
        self.gridLayout_2.addWidget(self.refaz_site, 14, 2, 1, 2)
        self.refaz_programa = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.refaz_programa.setObjectName("refaz_programa")
        self.gridLayout_2.addWidget(self.refaz_programa, 14, 0, 1, 2)
        self.select_aplicativo = QtWidgets.QComboBox(self.scrollAreaWidgetContents)
        self.select_aplicativo.setObjectName("select_aplicativo")
        self.select_aplicativo.addItem("")
        self.select_aplicativo.addItem("")
        self.select_aplicativo.addItem("")
        self.select_aplicativo.addItem("")
        self.select_aplicativo.addItem("")
        self.select_aplicativo.addItem("")
        self.gridLayout_2.addWidget(self.select_aplicativo, 4, 0, 1, 2)
        self.add_aplicativo = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.add_aplicativo.setObjectName("add_aplicativo")
        self.gridLayout_2.addWidget(self.add_aplicativo, 5, 0, 1, 2)
        self.add_nome = QtWidgets.QPushButton(self.scrollAreaWidgetContents)
        self.add_nome.setObjectName("add_nome")
        self.gridLayout_2.addWidget(self.add_nome, 11, 0, 1, 2)
        self.scrollArea.setWidget(self.scrollAreaWidgetContents)
        self.gridLayout.addWidget(self.scrollArea, 0, 0, 1, 1)
        self.dedicatoria = QtWidgets.QLabel(self.centralwidget)
        self.dedicatoria.setText('Desenvolvido por Renan Leite Vieira - <a href="https://github.com/renanleitev">Github</a> - <a href="https://www.linkedin.com/in/renan-leite-vieira-b81a85247/">LinkedIn</a>')
        self.dedicatoria.setOpenExternalLinks(True)
        self.dedicatoria.setObjectName("dedicatoria")
        self.gridLayout.addWidget(self.dedicatoria, 1, 0, 1, 1)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "Dopy"))
        self.caixa_diag_nav.setHtml(_translate("MainWindow", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'MS Shell Dlg 2\'; font-size:8.25pt; font-weight:400; font-style:normal;\">\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Selecione o nome do navegador que você quer abrir. Ex: Google Chrome. Clique &quot;Adicionar navegador&quot;.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Depois, digite a URL que você quer abrir (uma por vez).  Ex: https://www.google.com/. Clique &quot;Adicionar URL&quot;.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">ATENÇÃO: Para o mesmo navegador, você pode adicionar quantas URL quiser, basta digitar o nome da URL e clicar em &quot;Adicionar URL&quot;. Se quiser abrir em outro navegador, basta selecionar o nome do navegador, clicar em &quot;Adicionar navegador&quot;, e digitar as URLs.</p></body></html>"))
        self.select_navegador.setItemText(0, _translate("MainWindow", "Google Chrome"))
        self.select_navegador.setItemText(1, _translate("MainWindow", "Microsoft Edge"))
        self.select_navegador.setItemText(2, _translate("MainWindow", "Mozilla Firefox"))
        self.select_navegador.setItemText(3, _translate("MainWindow", "Brave"))
        self.select_navegador.setItemText(4, _translate("MainWindow", "Vivaldi"))
        self.select_navegador.setItemText(5, _translate("MainWindow", "Opera"))
        self.select_navegador.setItemText(6, _translate("MainWindow", "Opera GX"))
        self.deleta_site.setText(_translate("MainWindow", "Apagar última linha"))
        self.executar_automacao.setText(_translate("MainWindow", "Executar automação"))
        self.deleta_programa.setText(_translate("MainWindow", "Apagar última linha"))
        self.add_navegador.setText(_translate("MainWindow", "Adicionar navegador"))
        self.sair_programa.setText(_translate("MainWindow", "Sair do programa"))
        self.add_url.setText(_translate("MainWindow", "Adicionar URL"))
        self.toolButton_2.setText(_translate("MainWindow", "URL:"))
        self.toolButton.setText(_translate("MainWindow", "Nome:"))
        self.caixa_diag_app.setHtml(_translate("MainWindow", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'MS Shell Dlg 2\'; font-size:8.25pt; font-weight:400; font-style:normal;\">\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Selecione o tipo de arquivo que você quer abrir (pasta, documento, programa). Clique &quot;Adicionar aplicativo&quot;.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Depois, diga o nome do arquivo que você quer abrir. Ex: Word, Excel, etc. Clique &quot;Adicionar nome do programa&quot;.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">ATENÇÃO: Repita o processo toda vez que for selecionar um programa diferente. Ex: Aplicativo, Clique &quot;Adicionar aplicativo&quot;, Nome do Aplicativo, Clique &quot;Adicionar nome do programa&quot;.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
        self.textBrowser.setHtml(_translate("MainWindow", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'MS Shell Dlg 2\'; font-size:8.25pt; font-weight:400; font-style:normal;\">\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Bem vindo ao Dopy, o programa de automatização de tarefas repetitivas.</p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Com apenas um click, você pode abrir programas, pastas, documentos, músicas, vídeos e sites, sem precisar abrir um por um. </p></body></html>"))
        self.deletatudo_site.setText(_translate("MainWindow", "APAGAR TODAS AS LINHAS"))
        self.deletatudo_programa.setText(_translate("MainWindow", "APAGAR TODAS AS LINHAS"))
        self.refaz_site.setText(_translate("MainWindow", "Refazer linha apagada"))
        self.refaz_programa.setText(_translate("MainWindow", "Refazer linha apagada"))
        self.select_aplicativo.setItemText(0, _translate("MainWindow", "Aplicativo:"))
        self.select_aplicativo.setItemText(1, _translate("MainWindow", "Documento:"))
        self.select_aplicativo.setItemText(2, _translate("MainWindow", "Pasta:"))
        self.select_aplicativo.setItemText(3, _translate("MainWindow", "Foto:"))
        self.select_aplicativo.setItemText(4, _translate("MainWindow", "Vídeo:"))
        self.select_aplicativo.setItemText(5, _translate("MainWindow", "Música:"))
        self.add_aplicativo.setText(_translate("MainWindow", "Adicionar aplicativo"))
        self.add_nome.setText(_translate("MainWindow", "Adicionar nome do programa"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())