import { createUser, getUsers } from "./user.service.js";

export async function postUser(req, res) {
  try {
    const userData = req.body;
    // console.log("body",userData);
    const result = await createUser(userData);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchUser(req, res) {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
}
