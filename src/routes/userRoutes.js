import { Router } from "express";
import UserController from "../controller/UserController";

const router = new Router();

router.get("/", UserController.index);
router.post("/", UserController.store);

export default router;
