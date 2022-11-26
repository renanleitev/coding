# Classe Endereco
class Endereco():
    def __init__(self, rua='', cep='', numero='', complemento='casa'):
        self.rua = rua
        self.cep = cep
        self.__numero = self.add_numero(numero)
        self.complemento = complemento

    def add_numero(self, numero):
        self.numero = numero if numero.isnumeric() else 0

    def __str__(self):
        return f'Rua: {self.rua}, nº {self.numero}, Complemento: {self.complemento}, CEP: {self.cep}' # noqa


# Classe Cliente:  cliente que é representado através de seu nome, endereço,
# data nascimento, cpf e tipo de cliente.
class Cliente():
    def __init__(self, nome, data_nascimento, cpf,
                 tipo_cliente='Normal', endereco=Endereco()):
        self._nome = nome
        self._data_nascimento = data_nascimento
        self._cpf = cpf
        self.tipo_cliente = tipo_cliente
        self.endereco = endereco

    def addEndereco(self, rua, cep, numero, complemento):
        self.endereco.append(Endereco(rua, cep, numero, complemento))

##################


cliente1 = Cliente('Heitor Batistela Zunta',
                   '26/11/1983',
                   '996828421-15')

cliente2 = Cliente('Heitor Batistela Zunta',
                   '26/11/1983',
                   '996828421-15',
                   endereco=Endereco('Rua Bangu', "121", "791121-210", 'casa'))

print(cliente1.endereco)
print(cliente2.endereco)
