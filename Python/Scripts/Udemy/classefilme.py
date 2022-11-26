""" Herança """


class Programa(object):
    def __init__(self, nome, ano):
        self._nome = nome
        self._ano = ano


class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        super().__init__(nome, ano)
        self._duracao = duracao
        self._lista = [nome, ano, duracao]

    def lista(self):
        return self._lista

    def nome(self):
        return self._nome

    def ano(self):
        return self._ano

    def duracao(self):
        return self._duracao


f = Filme('Escola de Rock', 2008, 2)
print(f.lista())
