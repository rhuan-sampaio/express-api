import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "discord_id"] });
      return res.json(users);
    } catch (e) {
      return res.status(404);
    }
  }

  async store(req, res) {
    try {
      console.log("Este é  o req " + req.body);
      const newUser = await User.create(req.body);
      const { id, discord_id } = newUser;
      return res.json({ id, discord_id });
    } catch (e) {
      res.status(400).json(e.errors[0].message);
    }
  }
}

export default new UserController();
