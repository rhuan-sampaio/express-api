"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Characters", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      race: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      xp: {
        type: Sequelize.INTEGER,
        defaultValue: 0.0,
      },
      strength: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      dexterity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      constitution: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      intelligence: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      wisdom: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      charisma: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      worldId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "worlds",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Characters");
  },
};
