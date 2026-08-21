import express from "express";
import cors from "cors";
import userRouter from "./module/user/user.route.js";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.use("/users", userRouter);

export default app;
