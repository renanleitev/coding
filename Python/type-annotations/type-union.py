# Permite variáveis de dois ou mais atributos
string_e_inteiros: str | int = 1

# Correto
string_e_inteiros = 'a'

# Correto
string_e_inteiros = 2

# ! Errado
lista: list[int] = [1, 2, 3, 4, 5, 'a']

# Correto
lista_certa: list[int | str] = [1, 2, 3, 4, 5, 'b']