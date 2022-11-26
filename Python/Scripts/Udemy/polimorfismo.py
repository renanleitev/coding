# Polimorfismo: mesmas funções, comportamentos diferentes

from abc import ABC, abstractmethod

# Superclasse


class A(ABC):
    @abstractmethod
    def fala(self, msg): pass

# Subclasse


class B(A):
    def fala(self, msg):
        print(f'Classe B está falando {msg}')

# Subclasse


class C(A):
    def fala(self, msg):
        print(f'Classe C está falando {msg}')


b = B()
c = C()
b.fala('assunto')
c.fala('outro assunto')
