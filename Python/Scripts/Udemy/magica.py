# https://rszalski.github.io/magicmethods/

# Métodos Mágicos


class A:
    # Primeiro método a ser executado
    def __new__(cls, *args, **kwargs):
        print('Método new foi chamado')

        # SINGLETON
        if not hasattr(cls, '_jaexiste'):
            cls._jaexiste = super().__new__(cls)

        return cls._jaexiste

    # Transforma a classe em uma função
    def __call__(self, *args, **kwargs):
        return f'Argumentos enviados: {args} {kwargs}'

    # Mede o comprimento do objeto
    def __len__(self):
        return 55

    # Construtor (dá início ao programa)
    def __init__(self, nome=None):
        print('INIT')

    # Transforma em uma string
    def __str__(self):
        return 'Exibir classe em formato str'

    # Executa após o fim do programa
    def __del__(self):
        print('Objeto coletado.')

    # Adiciona algum atributo
    def __setattr__(self, key, value):
        self.__dict__[key] = f'{value} adicionei isso no seu valor'


a = A('luiz otávio')
