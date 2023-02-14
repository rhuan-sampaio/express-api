import Sequelize, { Model } from "sequelize";

export default class Character extends Model {
  static init(sequelize) {
    super.init(
      {
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
          type: Sequelize.FLOAT,
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
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
