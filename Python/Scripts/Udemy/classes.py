# Associação:


class Escritor():
    def __init__(self, nome):
        # Setter
        self.__nome = nome
        self.__ferramenta = None

    # Getter
    @property
    def nome(self):
        return self.__nome

    @property
    def ferramenta(self):
        return self.__ferramenta

    @ferramenta.setter
    def ferramenta(self, ferramenta):
        self.__ferramenta = ferramenta


class Caneta():
    def __init__(self, marca):
        # Setter
        self.__marca = marca

    # Getter
    @property
    def marca(self):
        return self.__marca

    def escrever(self):
        print('Caneta está escrevendo...')


class MaquinaDeEscrever:
    def escrever(self):
        print('Maquina está escrevendo...')

# Agregação:


class CarrinhoDeCompras:
    def __init__(self):
        self.produtos = []

    def inserir_produto(self, produto):
        self.produtos.append(produto)

    def lista_produto(self):
        for produto in self.produtos:
            print(produto.nome, produto.valor)

    def soma_total(self):
        return sum(produto.valor for produto in self.produtos)


class Produto:
    def __init__(self, nome, valor):
        self.nome = nome
        self.valor = valor

# Composição:


class Cliente:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        self.enderecos = []

    def insere_endereco(self, cidade, estado):
        self.enderecos.append(Endereco(cidade, estado))

    def lista_endereco(self):
        for endereco in self.enderecos:
            print(endereco.cidade, endereco.estado)

    def __del__(self):
        print(f'{self.nome} foi apagado.')


class Endereco:
    def __init__(self, cidade, estado):
        self.cidade = cidade
        self.estado = estado

    def __del__(self):
        print(f'{self.cidade}/{self.estado} foi apagado.')

# Herança (classe superior -> funções -> classe inferior):

# # Superclasse ou Classe Mãe


class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        self.nomeclasse = self.__class__.__name__

    def falar(self):
        print(f'{self.nomeclasse} está falando...')

# # Subclasses ou Classes Filhas

# A classe Cliente vai herdar a classe Pessoa


# class Cliente(Pessoa):
#     def comprar(self):
#         print(f'{self.nomeclasse} está comprando...')

# class Aluno(Pessoa): # A classe Aluno vai herdar a classe Pessoa
#     def estudar(self):
#         print(f'{self.nomeclasse} está estudando...')

# class ClienteVIP(Cliente): # Sobreposição de classe
#     def falar(self):
#         super().falar()
#         Pessoa.falar(self)
#         Cliente.falar(self)
#         print('Classe sobreposta')

#     def __init__(self, nome, idade, sobrenome):
#         Novo construtor usando construtor de Pessoa
#         Pessoa.__init__(self, nome, idade)
#         self.sobrenome = sobrenome # Novo atributo (que não tem em Pessoa)

#     def falar(self):
#         Criado no construtor de Pessoa
#         Pessoa.falar(self)
#         Cliente.falar(self)
#         print(f'{self.nome} {self.sobrenome}')
