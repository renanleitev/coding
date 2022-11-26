import sys
l1 = list(range(100))
l2 = iter(range(100))
print(type(l1), sys.getsizeof(l1)) # Lista consome mais memória do PC
print(type(l2), sys.getsizeof(l2)) # Lista consome menos memória do PC
print(next(l2)) # Exibe o próximo item do gerador
...
print(next(l2)) # Se for exibido o último item do gerador, ele para
