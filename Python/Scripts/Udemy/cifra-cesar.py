# Removendo acentos das palavras
from unidecode import unidecode as ud
# Criptografando uma palavra
print('Crie uma cifra de César. Ex: CAMA = DBNB.')
while True:
    try:
        palavra = ud(str(input('Diga uma palavra: ')).lower().strip())
        if palavra.isalpha():
            break
        else:
            print('Erro. Digite apenas palavras.')
        continue
    except Exception:
        print('Erro. Digite apenas palavras.')
        continue
while True:
    try:
        cifra = int(input('Diga uma cifra: '))
        break
    except Exception:
        print('Erro. Digite apenas números inteiros positivos.')
        continue
alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# Type annotation = Para especificar o tipo dentro da lista
palavra_cifra: list[str]
palavra_cifra = []
resto = cifra % len(alfabeto)
for letra_palavra in palavra:
    indice = alfabeto.index(letra_palavra)
    novo_indice = indice + resto
    if novo_indice > len(alfabeto) - 1:
        novo_indice %= len(alfabeto)
    palavra_cifra.extend(alfabeto[novo_indice])
print(f'A palavra {palavra}, usando a cifra {cifra} é: ', end='')
for c in palavra_cifra:
    print(c, end='')
# Descobrindo a palavra cifrada
print('\nAgora vamos decifrar uma palavra criptografada.')
while True:
    try:
        cripto = ud(str(input('Diga a palavra cifrada: ')).lower().strip())
        if cripto.isalpha():
            break
        print('Erro. Digite apenas palavras.')
        continue
    except Exception:
        print('Erro. Digite apenas palavras.')
        continue
lista = []
conta = 0
for _ in range(26):
    for letra_cripto in cripto:
        indice_cripto = alfabeto.index(letra_cripto) + conta
        if indice_cripto > 25:
            resto = indice_cripto % len(alfabeto)
            lista.append(alfabeto[resto])
        else:
            lista.append(alfabeto[indice_cripto])
    conta += 1
conta = 0
print('\nLista de palavras possíveis com a cifra de César:')
print()
for _ in range(100):
    p = lista[(0 + conta):(len(cripto) + conta)]
    if p != []:
        print(''.join(p))
        print()
    conta += len(cripto)
