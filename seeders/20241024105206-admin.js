'use strict';

// import { hashPassword } from '../src/common/util'
// import { hashPassword } from '../src/common/util';
import { genSaltSync, hashSync } from 'bcrypt';

const hashPassword = (password) =>{
  const salt = genSaltSync(10)
  const hashedPassword = hashSync(password, salt)

  return hashedPassword
}

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  await queryInterface.insert('admins', {
    name: 'admin1',
    username: 'admin',
    password: hashPassword('admin')
  });
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
