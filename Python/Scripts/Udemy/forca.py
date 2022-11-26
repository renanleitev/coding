from time import sleep
forca = 'TRÁGICO'
count = 0
chance = len(forca)
print('Vamos brincar de forca!')
palavra = input('Jogador 1, escolha uma palavra (sem acentos ou caracteres especiais): ').upper() # noqa
resposta = list(palavra)
certo = []
errado: list[str]
errado = []
temporario = ['[__]' for _ in range(len(palavra))]
print('\n#'*1000)
while True:
    print(temporario)
    print(f'A palavra possui {len(palavra)} letras.')
    tent = str(input('Jogador 2, escolha uma letra: ')).upper()
    if len(tent) > 1 or len(tent) <= 0:
        print('Não vale. Digite apenas uma letra.')
        continue
    if tent in resposta:
        for x, y in enumerate(resposta):
            if y == tent:
                if tent not in certo:
                    certo.append(tent)
                temporario[x] = y
    print(f'Letras corretas: {certo}')
    print(f'Letras erradas: {errado}')
    print(f'Parabéns, a letra {tent.upper()} está na palavra secreta. Continue tentando!') # noqa
    if tent not in resposta:
        if tent not in errado:
            errado.append(tent)
        print(f'Letras corretas: {certo}')
        print(f'Letras erradas: {errado}')
        print('-'*30)
        print(f'        {forca[:count+1]}')
        print('-' * 30)
        chance -= 1
        print(f'Você errou! A letra {tent.upper()} não está na palavra secreta. Continue tentando!') # noqa
        print(f'Você tem {chance} tentativas restantes.')
        count += 1
    if resposta == temporario:
        print('-' * 30)
        print(resposta)
        print(f'Parabéns! A palavra secreta era {palavra.upper()}.')
        sleep(5)
        break
    elif count >= len(forca):
        print(f'A palavra secreta era {palavra.upper()}.')
        print('Trágico! Você perdeu!')
        sleep(5)
        break
