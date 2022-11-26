print('Você quer adquirir um produto, mas está em dúvida se deve pagar em dinheiro ou em cartão.')
print('Você fala com o atendente da loja e analisa as suas opções.')
while True:
    PRE = input('Bom dia. Diga o preço do produto: ')
    try:
        if PRE.isnumeric():
            ESC = input('Digite 1 para pagar com dinheiro ou 2 para pagar com cartão: ')
            try:
                if ESC.isnumeric():
                    if int(ESC) == 1:
                        print(f'Em dinheiro, o valor do produto com desconto é R$ {float(PRE)*0.9}.')
                        break
                    if int(ESC) == 2:
                        PARC = input('Ok. Em quantas parcelas você quer? ')
                        try:
                            if PARC.isnumeric():
                                if int(PARC) == 1:
                                    print(f'A vista no cartão, o valor do produto com desconto é R$ {float(PRE)*0.95}.')
                                    break
                                elif int(PARC) == 2:
                                    print(f'Parcelado no cartão, o valor do produto é R$ {float(PRE)}, dividido em {int(PARC)} parcelas de R$ {float(PRE)/int(PARC)}.')
                                    break
                                elif int(ESC) == 2 and int(PARC) >= 3:
                                    JUROS = float(PRE) + (float(PRE) * 0.2)
                                    print(f'Parcelado no cartão, o valor do produto com juros é R$ {JUROS} e vão ser {int(PARC)} parcelas de R$ {JUROS/int(PARC)}.')
                                    break
                        except Exception:
                            continue
            except Exception:
                continue
    except Exception:
        continue



