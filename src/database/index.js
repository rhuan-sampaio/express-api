import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../models/User";
import World from "../models/World";

const models = [User, World];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  model.init(connection);
});

const user = User.init(connection);
const world = World.init(connection);

user.belongsToMany(world, { through: "usuarioM2MMundo", as: "worlds" });
world.belongsToMany(user, { through: "usuarioM2MMundo", as: "users" });

(async () => {
  await connection.sync({ force: false });
})();
