import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", UserController.getAllUsers);
userRoutes.get("/:id", UserController.getUserById);
userRoutes.post("/", UserController.createUser);


export default userRoutes;
