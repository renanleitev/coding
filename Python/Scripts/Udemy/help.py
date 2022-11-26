# Docstrings

""" Usando help:
from conta import Conta

#! Usando a função help:
help(Conta.conta)
help(Conta.agencia)

#! Usando a função doc:
# print(Conta.agencia.__doc__)
 """

""" Type annotations:
#! Pode comentar usando uma expressão seguida de dois pontos
x: int = 10
y: float = 4.5
z: bool = False

#! Pode comentar usando (->) para indicar uma variável, função, etc.
# def funcao(p1: int, p2: float, p3: bool) -> float:
    return 10.1

# print(funcao(10.1, 'str', {}))
"""

""" Usando typing
#! Typing: Usando a função typing para comentar
from typing import Union

# Especifica o que quer usar na função (list e dict) - não faz parte do código
def funcao() -> Union[list, dict]:
    return []
"""
