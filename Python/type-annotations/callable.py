from collections.abc import Callable

# Funções temporárias (podem ser reutilizadas em outras funções)
SomaInteiros = Callable[[int, int], int]
# Leia-se: SomaInteiros recebe dois valores inteiros e retorna um inteiro

def executa(func: SomaInteiros, a: int, b: int) -> int:
    return func(a, b)

def soma(a: int, b: int) -> int:
    return a + b

print(executa(soma, 1, 2))
# 3