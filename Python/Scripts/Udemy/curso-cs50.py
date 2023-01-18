# Usando SQL com a biblioteca CS50
from cs50 import SQL
import csv

# Criando o arquivo do zero
open('cadastro.db', 'w').close()
# Acessando a base de dados
db = SQL("sqlite:///cadastro.db")

""" OBS: Funções SQL sempre vão ser em CAIXA ALTA
Valores SQL sempre vão sem em letra minúscula
Ex: CREATE TABLE (função) nome (valor)"""

""" # db.execute = Executa a base de dados
# CREATE TABLE = Cria uma tabela (Ex: nome, sobrenome)
# Colunas = id, show_id (Vai receber um valor INTEGER = Inteiro)
# Campo da coluna = nome, sobrenome (Vai receber um valor TEXT = Texto)
# PRIMARY KEY = Chave principal/original
# - Enumera os valores em ordem crescente, começando em 1...
# FOREIGN KEY = Chave secundária/modificada
# - São os valores que você quer colocar na tabela (Ex: nome = RENAN) """
db.execute("CREATE TABLE nome (id INTEGER, Nome TEXT, PRIMARY KEY (id))") # noqa
db.execute("CREATE TABLE sobrenome (sobrenome_id INTEGER, Sobrenome TEXT, FOREIGN KEY (sobrenome_id) REFERENCES nome (id))") # noqa
# Inserindo os valores na base de dados
with open(r'C:\Users\renan\Documents\Programação\VsCode\Python\Scripts\Udemy\clientes.csv', 'r') as file: # noqa
    # Lendo o csv como dicionário
    base_dados = csv.DictReader(file)
    for coluna in base_dados:
        nome = coluna['Nome'].strip().upper()
        # ? = Placeholder (substituto) para algum valor
        identidade = db.execute('INSERT INTO nome (nome) VALUES(?)', nome)
        # Separando dados com vírgula em linhas diferentes
        for sobrenome in coluna['Sobrenome'].split(', '):
            db.execute('INSERT INTO sobrenome (sobrenome_id, Sobrenome) VALUES(?, ?)', identidade, sobrenome) # noqa
print('Sucesso.')
