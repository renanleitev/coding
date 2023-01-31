/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      // Não precisa estar no models
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // ! Campos que precisam estar no models
      // Nome original do arquivo que fez upload
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Nome modificado do arquivo (maior segurança)
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Chave estrangeira = Faz referência a tabela alunos
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        // Ao deletar a foto = O campo torna-se null
        onDelete: 'SET NULL',
        // Ao atualizar a foto = Modifica o registro inteiro
        onUpdate: 'CASCADE',
      },
      // Não precisa estar no models
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
