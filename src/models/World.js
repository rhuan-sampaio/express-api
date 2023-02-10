import Sequelize, { Model } from "sequelize";

export default class World extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo deve ter entre 3 e 255 caracteres.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
