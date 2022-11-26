# Usando anotações em classes
# ! Classes também são tipos!
# É possível usar tipagem genérica (any) => Não recomendável

from typing import Any

# Especificando o tipo
class Pessoa:
    def __init__(self, primeiroNome, sobreNome):
        self.primeiroNome = primeiroNome
        self.sobreNome = sobreNome
    
    @property
    def nome_completo(self):
        return f'{self.primeiroNome} {self.sobreNome}'

def dizendo_nome(Pessoa: Pessoa) -> str:
    return Pessoa.nome_completo

pessoa01 = Pessoa('Renan', 'Leite')

print(dizendo_nome(pessoa01))
# Renan Leite

# Sem especificar
class Person:
    def __init__(self, primeiroNome, sobreNome):
        self.primeiroNome = primeiroNome
        self.sobreNome = sobreNome
    
    @property
    def nome_completo(self):
        return f'{self.primeiroNome} {self.sobreNome}'

def qualquer_nome(Person: Any) -> str:
    return Person.nome_completo

pessoa02 = Person('Renan', 'Leite')

print(qualquer_nome(pessoa02))
# Renan Leite