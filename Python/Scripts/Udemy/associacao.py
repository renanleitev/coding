# Associação entre classes
# Mesmo associadas, as classes são independentes

from classes import Escritor
from classes import Caneta
from classes import MaquinaDeEscrever

# Atribuindo valores a variáveis
escritor = Escritor('João')
caneta = Caneta('Bic')
maquina = MaquinaDeEscrever()

# Atribuindo funções e variáveis
print(escritor.nome)
print(caneta.marca)
maquina.escrever()

# Associação entre classes
escritor.ferramenta = caneta
escritor.ferramenta.escrever()
escritor.ferramenta = maquina
escritor.ferramenta.escrever()

# Deletando variáveis
del escritor
print(caneta.marca)
maquina.escrever()