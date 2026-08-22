import { Router } from "express";
import {
  deleteUser,
  fetchUser,
  postUser,
  updateInfo,
} from "./user.controller.js";

const userRouter = Router();

userRouter.post("/", postUser);
userRouter.get("/", fetchUser);
userRouter.delete("/:id", deleteUser);
userRouter.patch("/:id", updateInfo);

export default userRouter;
