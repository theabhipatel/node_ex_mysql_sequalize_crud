import { Router } from "express";
import {
  handleCreateUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
} from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/", handleCreateUser);
userRouter.get("/", handleGetAllUsers);
userRouter.get("/:id", handleGetUserById);
userRouter.patch("/:id", handleUpdateUserById);
userRouter.delete("/:id", handleDeleteUserById);

export default userRouter;
