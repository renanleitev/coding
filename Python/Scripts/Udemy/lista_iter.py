""" Criando uma lista usando classes e iteradores. """


class MinhaLista:
    """ Método construtor """
    def __init__(self):
        self.__items = []
        self.__index = 0

    """ Pegar itens """
    def add(self, valor):
        self.__items.append(valor)

    """ Getter """
    def __getitem__(self, index):
        return self.__items[index]

    """ Setter """
    def __setitem__(self, index, valor):
        if index >= len(self.__items):
            self.__items.append(valor)
        self.__items[index] = valor

    """ Apaga da memória a lista """
    def __delitem__(self, index):
        del self.__items[index]

    """ Cria o iterador """
    def __iter__(self):
        return self

    """ Próximo item (next) """
    def __next__(self):
        try:
            item = self.__items[self.__index]
            self.__index += 1
            return item
        except IndexError as e:
            raise StopIteration from e

    """ Para imprimir a classe/lista """
    def __str__(self):
        return f'{self.__class__.__name__}({self.__items})'

    def __repr__(self):
        return self.__str__()


if __name__ == "__main__":
    lista = MinhaLista()
    lista.add('Luiz')
    lista.add('Maria')

    # lista = list(lista)

    # print(lista)
    # lista[0] = 'João'
    # lista[2] = 'Funciona?'

    # del lista[2]

    # print(lista)

    for valor in lista:
        print(valor)

    print(lista)
