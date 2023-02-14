import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "discord_id", "nome"] });
      return res.json(users);
    } catch (e) {
      return res.status(404);
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, discord_id, nome } = newUser;
      return res.json({ id, discord_id, nome });
    } catch (e) {
      res.status(400).json(e.errors[0].message);
    }
  }
}

export default new UserController();
