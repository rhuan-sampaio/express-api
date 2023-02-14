import express from "express";
import userRoutes from "./src/routes/userRoutes";
import dotenv from "dotenv";
import "./src/database";
import timeout from "express-timeout-handler";
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      timeout.handler({
        timeout: 5000,
        onTimeout: function (req, res) {
          res.status(408).send("Request Timeout");
        },
      })
    );
  }
  routes() {
    this.app.use("/users/", userRoutes);
  }
}

export default new App().app;
