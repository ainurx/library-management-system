'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('admins', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING(30),
          allowNull: false
      },
      username: {
          type: Sequelize.STRING(20),
          allowNull: false
      },
      password: {
          type: Sequelize.STRING(255),
          allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
