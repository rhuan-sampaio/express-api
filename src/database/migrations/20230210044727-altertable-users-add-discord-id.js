'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "nome", "discord_id");
    await queryInterface.removeColumn('users', "email");
    await queryInterface.removeColumn('users', 'password_hash');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "discord_id", "nome");
    await queryInterface.addColumn("users", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
    await queryInterface.addColumn("users", "password_hash", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
