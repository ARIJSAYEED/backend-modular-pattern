import { createUser, editInfo, getUsers, removeUser } from "./user.service.js";

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

export async function updateInfo(req, res) {
  try {
    const id = req.params.id;
    const updatedInfo = req.body;
    const result = await editInfo(id, updatedInfo);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const result = await removeUser(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}
