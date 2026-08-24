import { ObjectId } from "mongodb";
import { getDB } from "../../config/db.js";

const getUsersCollection = () => {
  return getDB().collection("users");
};

// CREATE
export async function createUser(userData) {
  const usersCollection = getUsersCollection();
  const userFullData = {
    ...userData,
    role: "user",
  };
  const result = await usersCollection.insertOne(userFullData);
  return result;
}

// READ
export async function getUsers() {
  const usersCollection = getUsersCollection();
  const result = await usersCollection.find().toArray();
  return result;
}

// UPDATE
export async function editInfo(id, updatedInfo) {
  const usersCollection = getUsersCollection();

  const query = {};
  if (id) {
    query._id = new ObjectId(id);
  }

  const updatedInfodoc = {
    $set: updatedInfo,
  };

  const result = await usersCollection.updateOne(query, updatedInfodoc);
  return result;
}

// DELETE
export async function removeUser(id) {
  const usersCollection = getUsersCollection();

  const query = {};

  if (id) {
    query._id = new ObjectId(id);
  }
  const result = await usersCollection.deleteOne(query);
  return result;
}
