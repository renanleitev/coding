// Evitando que existam emails iguais

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      // Selecionando a tabela 'alunos'
      'alunos',
      // Selecionando a coluna 'email'
      'email',
      // Modificando os atributos da coluna
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
