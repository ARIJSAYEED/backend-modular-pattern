import { Router } from "express";
import { fetchUser, postUser } from "./user.controller.js";

const userRouter = Router();

userRouter.post("/", postUser);
userRouter.get("/", fetchUser);

export default userRouter;
