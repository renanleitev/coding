# Base de Dados
import sqlite3
# Criando a base de dados
conexao = sqlite3.connect('basededados.db')
cursor = conexao.cursor()
# Criando as colunas da tabela
# INTEGER = Número inteiro
# PRIMARY KEY = Chave principal
# AUTOINCREMENT = As colunas são geradas em ordem crescente
# TEXT = String
# REAL = Float (número real ou ponto flutuante)
# ! Basta executar o comando uma vez, para criar a tabela
cursor.execute('CREATE TABLE IF NOT EXISTS clientes ('
               'id INTEGER PRIMARY KEY AUTOINCREMENT,'
               'nome TEXT,'
               'peso REAL'
               ')')
# Inserindo valores na tabela
# cursor.execute('INSERT INTO clientes (nome, peso) VALUES ("Renan", 91)')
# '?' = Para inserir valores indeterminados
# cursor.execute('INSERT INTO clientes (nome, peso) VALUES (?, ?)',
#               ('Luca', 50))
# Para inserir em formato dicionário
# cursor.execute(
#     'INSERT INTO clientes (nome, peso) VALUES (:nome, :peso)',
#     {'nome': 'João', 'peso': 70}
#     )
# INSERT = Para inserir por ID
# cursor.execute(
#     'INSERT INTO clientes VALUES (:id, :nome, :peso)',
#     {'id': None, 'nome': 'Daniel', 'peso': 80}
#     )
# UPDATE = Para atualizar valores
# cursor.execute(
#     'UPDATE clientes set nome = :nome WHERE id = :id',
#     {'nome': 'Joana', 'id': 2}
#     )
# DELETE = Para deletar os valores
# cursor.execute(
#     'DELETE FROM clientes WHERE id = :id',
#     {'id': 2}
#     )
# Filtrando valores por condicionais
cursor.execute('SELECT nome, peso FROM clientes WHERE peso > :peso',
               {'peso': 70})
# Commit = Executa os comandos anteriores
conexao.commit()
# SELECT * = Seleciona todos os valores da tabela clientes
cursor.execute('SELECT * FROM clientes')
# Fetchall = Obtem todos os valores selecionados
# Iterando sobre os valores da tabela
for linha in cursor.fetchall():
    # Desempacotando os valores na linha em variáveis
    identificador, nome, peso = linha
    print(identificador, nome, peso)
# Fechando a base de dados
cursor.close()
conexao.close()
