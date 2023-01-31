// Inserindo novos usuários no banco de dados

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz 1',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 2',
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 3',
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('789456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
