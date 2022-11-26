# Função normal
def soma(x, y):
    return x + y

# Função anotada
def soma_anotado(x: int, y: int, z: float) -> float:
    return x + y + z

print(soma_anotado(1, 2, 3.0))