""" Web Scraping: Obtendo informações de sites via HTML """

import requests # noqa
from bs4 import BeautifulSoup

""" Escolhendo a url do site """
url = 'https://pt.stackoverflow.com/questions/tagged/python'

""" Acessando a url """
response = requests.get(url)
# print(response.text)

""" Obtendo o HTML """
html = BeautifulSoup(response.text, 'html.parser')
# print(html)

""" Obtendo o texto do site (inspecionar elemento) """
for palavra in html.select('.mb24'):
    print(palavra.text)

""" SAÍDA:

Perguntas com a tag [python]



Python é uma linguagem de programação multi-paradigma, dinâmica e fortemente tipada cuja filosofia de design enfatiza a usabilidade. Duas 
versões similares porém incompatíveis de Python estão em uso (2 e 3). Esta linguagem ainda conta com uma imensa gama de bibliotecas, integrações com ambientes de desenvolvimento e distribuições de muita qualidade. Por favor, mencione a versão que você está usando quando fizer uma pergunta sobre Python.




Saiba mais…


Melhores usuários


Sinônimos
""" # noqa
