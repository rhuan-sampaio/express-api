import User from "../models/User";

class UserController {
  async index(req, res) {
    res.json({ message: "Boleta" });
  }

  async store(req, res) {
    try {
      console.log("Este é  o req " + req.body);
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserController();
