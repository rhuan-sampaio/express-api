import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        discord_id: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        nome: {
          type: Sequelize.STRING,
          defaultValue:'',
        }
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
