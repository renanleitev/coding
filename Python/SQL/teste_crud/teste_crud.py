# Manipulando base de dados em servidores
import pymysql.cursors
# Conectando ao servidor
conexao = pymysql.connect(
    host='127.0.0.1',
    user='root',
    # ! Se não tiver senha, password = ''
    password='',
    # db = Base de dados
    db='clientes',
    # Ler os caracteres especiais
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)

with conexao.cursor() as cursor:
    # # ! Imprimindo todos os dados
    # cursor.execute('SELECT * FROM clientes')
    # resultado = cursor.fetchall()
    # # Mostrando todos os dados
    # # for row in resultado:
    # #     print(row)

    # # ! Selecionando os dados
    # for linha in resultado:
    #     print(linha['nome'], linha['sobrenome'])

    # # ! Inserindo valores
    # sql = 'INSERT INTO clientes (nome, sobrenome, idade, peso) VALUES' \
    #     '(%s, %s, %s, %s)'
    # cursor.execute(sql, ('Jack', 'Sparrow', 32, 70))
    # conexao.commit()

    # # ! Inserindo valores de uma lista
    # sql = 'INSERT INTO clientes (nome, sobrenome, idade, peso) VALUES' \
    #   '(%s, %s, %s, %s)'
    # dados = [
    #     ('CORAGEM', 'MURIEL', 5, 12),
    #     ('BOB', 'ESPONJA', 23, 45)
    # ]
    # # executemany = para inserir múltiplos dados
    # cursor.executemany(sql, dados)
    # conexao.commit()

    # # ! Deletando valores
    # Id única
    # sql = 'DELETE FROM clientes WHERE id = %s'
    # cursor.execute(sql, (7,))
    # conexao.commit()
    # Múltiplas ids (cada s% representa a id que você quer deletar)
    # sql = 'DELETE FROM clientes WHERE id IN (%s, %s, %s)'
    # cursor.execute(sql, (1, 2, 3))
    # conexao.commit()
    # Por intervalo de id
    # sql = 'DELETE FROM clientes WHERE id BETWEEN %s AND %s'
    # cursor.execute(sql, (4, 5))
    # conexao.commit()

    # # ! Salvando alterações
    sql = 'UPDATE clientes SET nome=%s WHERE id=%s'
    cursor.execute(sql, ('JONAS', 5))
    conexao.commit()

    # # ! Visualizando as alterações
    # # ORDER = Ordenando por elemento (id, nome, sobrenome)
    # ASC = Ordem ascendente
    # DESC = Ordem descendente
    # LIMIT = Limitando a quantidade de linhas
    cursor.execute('SELECT * FROM clientes ORDER BY id ASC LIMIT 100')
    resultado = cursor.fetchall()
    for row in resultado:
        print(row)

# Fechando a conexão
conexao.close()
