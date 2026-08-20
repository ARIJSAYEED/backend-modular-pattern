import { MongoClient } from "mongodb";

// console.log(process.env.DB_URI);
const client = new MongoClient(process.env.DB_URI);

let db;

export async function connectToMongoDB() {
  try {
    await client.connect();

    db = client.db("modular-pattern");

    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }

export function getDB() {
  if (!db) {
    throw new Error("Database is not connected");
  }

  return db;
}
