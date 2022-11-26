""" Encapsulando classes: public, protected, private """
""" Public: Qualquer um pode acessar e alterar as variáveis """
""" Protected (_): Qualquer um pode acessar e alterar, mas é avisado que a
    variável é importante e deve ser deixada em paz (não modifique) """
""" Private (__): Não pode acessar e alterar as variáveis """


class BaseDeDados:
    # Sempre iniciar uma classe com uma função init
    # Com duplo underline (__):
    def __init__(self):
        # Não pode acessar e alterar as variáveis
        self.__dados = {}

    def inserir_cliente(self, id, nome):
        if 'clientes' not in self.__dados:
            self.__dados['clientes'] = {id: nome}
        else:
            self.__dados['clientes'].update({id: nome})

    def lista_clientes(self):
        for id, nome in self.__dados['clientes'].items():
            print(id, nome)

    def apaga_cliente(self, id):
        del self.__dados['clientes'][id]


bd = BaseDeDados()
bd.inserir_cliente(1, 'Renan')
bd.inserir_cliente(2, 'Baldo')
# Valor não foi alterado
bd.__dados = 'Sei lá'
# 1, Renan / 2, Baldo
bd.lista_clientes()
