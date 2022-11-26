# Importando API

# import requests
# import json

# """ Cotação das Moedas
# # Obtendo a api (ex: cotação de moeda)
# cotacoes = requests.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL') # noqa
# # Convertendo para json
# cotacoes = cotacoes.json()
# # Pegando a cotação do dolár
# cotacao_dolar = cotacoes['USDBRL']['bid']
# print('O valor do dólar hoje é:', cotacao_dolar, 'reais.')
# print()
# # Pegando a cotação do euro
# cotacao_euro = cotacoes['EURBRL']['bid']
# print('O valor do euro hoje é:', cotacao_euro, 'reais.')
# print()
# # Pegando a cotação do bitcoin
# cotacao_btc = cotacoes['BTCBRL']['bid']
# print('O valor do bitcoin hoje é:', cotacao_btc, 'reais.') """

# """ Endereço por CEP
# # Pegando o endereço (colocar o CEP no final do link = json/numero_cep)
# endereco = requests.get('https://cep.awesomeapi.com.br/json/60050041')
# endereco = dict(endereco.json())
# for x, y in endereco.items():
#     print(f'{x}: {y}')
#  """

# """ Dica do dia:
# conselho = requests.get('https://api.adviceslip.com/advice')
# conselho = conselho.json()
# dica = conselho['slip']['advice']
# print(dica) """

# """ Frases do Chuck Norris
# chuck = requests.get('https://api.chucknorris.io/jokes/random')
# chuck = chuck.json()
# frase = chuck['value']
# print(frase)
# """
