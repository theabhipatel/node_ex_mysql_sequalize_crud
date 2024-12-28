import { Router } from "express";
import userControllers from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/", userControllers.handleCreateUser);
userRouter.get("/", userControllers.handleGetAllUsers);
userRouter.get("/:id", userControllers.handleGetUserById);
userRouter.patch("/:id", userControllers.handleUpdateUserById);
userRouter.delete("/:id", userControllers.handleDeleteUserById);

export default userRouter;
