import sqlite3


class AgendaDB:
    def __init__(self, arquivo):
        # Conectando à base de dados
        self.conn = sqlite3.connect(arquivo)
        self.cursor = self.conn.cursor()

    def inserir(self, nome, telefone):
        # INSERT = Inserindo dados
        # IGNORE = Evitar erros de repetição ao inserir dados
        # No DB Browser, clicar em:
        # estrutura do banco de dados ->
        # tabela ->
        # botão direito -> modificar tabela ->
        # selecionar opção U (para tornar o valor único)
        consulta = 'INSERT OR IGNORE INTO agenda (nome, telefone) VALUES (?, ?)' # noqa
        self.cursor.execute(consulta, (nome, telefone))
        # Salvando as alterações
        self.conn.commit()

    def editar(self, nome, telefone, id):
        # UPDATE = Atualizando os dados
        # SET = Define os valores para os respectivos campos
        # WHERE = Procura o campo e realizar alguma função
        consulta = 'UPDATE OR IGNORE agenda SET nome=?, telefone=? WHERE id=?'
        self.cursor.execute(consulta, (nome, telefone, id))
        self.conn.commit()

    def excluir(self, id):
        # DELETE = Apagando dados
        consulta = 'DELETE FROM agenda WHERE id=?'
        # Não esquecer de colocar uma vírgula após o valor para criar a tupla
        self.cursor.execute(consulta, (id,))
        self.conn.commit()

    def listar(self):
        # SELECT * = Selecionando todos os dados
        self.cursor.execute('SELECT * FROM agenda')
        # Mostrando os dados
        for linha in self.cursor.fetchall():
            print(linha)

    def buscar(self, valor):
        # LIKE = Nome é igual ou parecido com o parâmetro informado
        consulta = 'SELECT * FROM agenda WHERE nome LIKE ?'
        # % = Qualquer coisa que estiver do lado esquerdo ou direito
        self.cursor.execute(consulta, (f'%{valor}%',))
        for linha in self.cursor.fetchall():
            print(linha)

    def fechar(self):
        # Fechando o arquivo
        self.cursor.close()
        self.conn.close()


if __name__ == '__main__':
    agenda = AgendaDB('agenda.db')
    # O telefone está entre aspas pois é um texto (string)
    # Atenção = O campo id é sem aspas
    # agenda.editar('ChicoScience', '12334354674', 6)
    # Excluind os dados por id
    # agenda.excluir(7)
    print('agenda executada com sucesso')
    agenda.buscar('Chico')
