// import { QueryInterface } from "sequelize";

// const enums = require("../src/types/enums");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('books', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      title: {
          type: Sequelize.STRING(70),
          allowNull: false
      },
      description: {
          type: Sequelize.STRING(70),
          allowNull: true
      },
      category: {
          type: Sequelize.ENUM(["Science fiction", "Autobiography", "Adventure fiction", "Biography", "Education", "Economy", "Technology"]),
          allowNull: false
      },
      published_year: {
          type: Sequelize.INTEGER,
          allowNull: true
      }
    });

    await queryInterface.addConstraint('books', {
      fields: ['author_id'],
      type: 'foreign key',
      name: 'fk_book_author',
      references: {
        table: 'authors',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('books');
  }
};
