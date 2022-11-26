# Permite utilizar funções em variáveis	com atributos desconhecidos
def soma(x: int, y: float | None = None) -> float:
    if isinstance(y, float):
        return x + y
    return x + x
print(soma(1)) 
# 2
print(soma(1, 5)) 
# 2
print(soma(1, 2.2))
# 3.2

def subtrai(x: int, y: float | None = None) -> float:
    if isinstance(y, float | int):
        return x - y
    return x - x
print(subtrai(1))
# 0
print(subtrai(1, 10))
# -9
print(subtrai(1, 2.2))
# -1.2