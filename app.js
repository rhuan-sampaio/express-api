import express from "express";
import userRoutes from "./src/routes/userRoutes";
import dotenv from "dotenv";
import "./src/database";
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
  }
  routes() {
    this.app.use("/", userRoutes);
  }
}

export default new App().app;
