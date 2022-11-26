from datetime import datetime


class Pessoa:
    ano_atual = int(datetime.strftime(datetime.now(), '%Y'))

    # Sempre iniciar uma classe com uma função init

    def __init__(self, nome, idade, comendo=False, falando=False):
        self.nome = nome
        self.idade = idade
        self.comendo = comendo
        self.falando = falando

    def falar(self, assunto):
        if self.comendo:
            print(f'{self.nome} não pode falar comendo.')
            return

        if self.falando:
            print(f'{self.nome} já está falando.')
            return

        print(f'{self.nome} está falando sobre {assunto}.')
        self.falando = True

    def parar_falar(self):
        if not self.falando:
            print(f'{self.nome} não está falando')
            return

        print(f'{self.nome} parou de falar.')
        self.falando = False

    def comer(self, alimento):
        if self.comendo:
            print(f'{self.nome} já está comendo.')
            return

        if self.falando:
            print(f'{self.nome} não pode comer falando.')
            return

        print(f'{self.nome} está comendo {alimento}.')
        self.comendo = True

    def parar_comer(self):
        if not self.comendo:
            print(f'{self.nome} não está comendo.')
            return

        print(f'{self.nome} parou de comer.')
        self.comendo = False

    def get_ano_nascimento(self):
        return self.ano_atual - self.idade

    """ Getter e setter servem para alterar atributos
    sem modificar o código original """

    # Getter (pega um atributo)
    # modifica a propriedade do atributo
    @property
    def nome(self):
        return self._nome

    # Setter (modifica um atributo)
    # usa um atributo (ex: nome) e estabelece uma alteração (setter)
    @nome.setter
    def nome(self, valor):
        # aqui foi feito um replace, mas pode ser qualquer coisa
        self._nome = valor.replace('u', 'r')


p1 = Pessoa('Luiz', 14)
p2 = Pessoa('Maria', 13)
p1.comer('maçã')
p2.comer('pudim')
