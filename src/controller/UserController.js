import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "discord_id", "nome"],
      });
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

  async update(req, res) {
    try {
      console.log(req.body.discord_id);
      const { discord_id } = req.body;
      const user = await User.findOne({
        where: {
          discord_id,
        },
      });
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }
      console.log("saasdad");
      const userEdit = await user.update(req.body);

      return res.status(200).json(userEdit);
    } catch (e) {
      console.log(e);
      return res.status(400);
    }
  }
}

export default new UserController();
