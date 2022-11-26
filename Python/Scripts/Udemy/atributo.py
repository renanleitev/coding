""" Como citar o atributo de uma classe """


class Pessoa:
    def __init__(self, nome):
        self._Nome = 'sdfc'


A = Pessoa(nome='joão')

""" Use a variável da classe (A) com o atributo usado em init """
print(A._Nome)
