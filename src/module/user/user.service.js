import { getDB } from "../../config/db.js";

const getUsersCollection = () => {
  return getDB().collection("users");
};

export async function createUser(userData) {
  const usersCollection = getUsersCollection();
  const result = await usersCollection.insertOne(userData);
  return result;
}

export async function getUsers() {
  const usersCollection = getUsersCollection();
  const result = await usersCollection.find().toArray();
  return result;
}
