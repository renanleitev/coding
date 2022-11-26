# # SETTER = CONFIGURANDO UM VALOR (=)
# # GETTER = OBTER UM VALOR (.)
#  ! NÃO PODE TER SETTER SEM GETTER, MAS PODE TER GETTER SEM SETTER

class Pessoa:
    def __init__(self, nome, sobrenome):
        self.nome = nome
        self.sobrenome = sobrenome

    @property
    def nome(self):
        print('Nome:')
        return 'alan'

    @nome.setter
    def nome(self, nome):
        pass

    @property
    def sobrenome(self):
        print('Sobrenome:')
        return 'panos'

    @sobrenome.setter
    def sobrenome(self, sobrenome):
        pass


p1 = Pessoa('Otávio', 'Flavio')
print(p1.nome)
print(p1.sobrenome)
# p1.nome('João')
# p1.sobrenome('Carlos')
